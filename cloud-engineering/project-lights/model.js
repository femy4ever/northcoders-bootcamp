const {
  PutItemCommand,
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");

function formatDynamoData(data) {
  const light = structuredClone(data);

  light.location = light.location.S;
  light.id = light.id.N;
  light.status = light.status.BOOL;

  return light;
}

exports.insertLight = (location) => {
  const hashKey = Date.now();
  const newItem = {
    id: {
      N: `${hashKey}`,
    },
    location: {
      S: location,
    },
    status: {
      BOOL: false,
    },
  };

  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: newItem,
  });

  return client
    .send(command)
    .then(() => {
      const getCommand = new GetItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          id: {
            N: `${hashKey}`,
          },
        },
      });

      return client.send(getCommand);
    })
    .then((res) => {
      const light = res.Item;

      return formatDynamoData(light);
    });
};

exports.fetchLights = () => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new ScanCommand({ TableName: process.env.TABLE_NAME });
  return client.send(command).then((data) => {
    return data.Items.map(formatDynamoData);
  });
};

exports.toggleLight = (id) => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });
  const checkStatus = new GetItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: {
        N: `${id}`,
      },
    },
  });

  const setToTrue = new UpdateItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: {
        N: `${id}`,
      },
    },
    ExpressionAttributeNames: {
      "#S": "status",
    },
    ExpressionAttributeValues: {
      ":T": {
        BOOL: true,
      },
    },
    UpdateExpression: "SET #S = :T",
    ReturnValues: "ALL_NEW",
  });
  const setToFalse = new UpdateItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: {
        N: `${id}`,
      },
    },
    ExpressionAttributeNames: {
      "#S": "status",
    },
    ExpressionAttributeValues: {
      ":F": {
        BOOL: false,
      },
    },
    UpdateExpression: "SET #S = :F",
    ReturnValues: "ALL_NEW",
  });

  let command;

  return client
    .send(checkStatus)
    .then((dbObj) => {
      if (!dbObj.Item) {
        return Promise.reject({ status: 404, msg: "ID not found" });
      }
      if (dbObj.Item.status.BOOL === true) {
        command = setToFalse;
      } else {
        command = setToTrue;
      }

      return client.send(command);
    })
    .then(({ Attributes }) => {
      return formatDynamoData(Attributes);
    });
};
