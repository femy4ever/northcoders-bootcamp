const {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
  PutItemCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");

function formatDynamoData(data) {
  const heating = structuredClone(data);

  heating.zone = heating.zone.S;
  heating.id = heating.id.N;
  heating.temperature = Number(heating.temperature.N);

  return heating;
}

exports.fetchHeating = () => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new ScanCommand({
    TableName: process.env.TABLE_NAME,
  });

  return client.send(command).then((data) => {
    return data.Items.map(formatDynamoData);
  });
};

exports.insertZone = (zone, temperature) => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const hashKey = Date.now();

  const command = new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: {
      id: {
        N: `${hashKey}`,
      },
      zone: {
        S: zone,
      },
      temperature: {
        N: `${temperature}`,
      },
    },
  });

  return client
    .send(command)
    .then(() => {
      const command = new GetItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          id: { N: `${hashKey}` },
        },
      });
      return client.send(command);
    })
    .then((data) => {
      return formatDynamoData(data.Item);
    });
};

exports.updateTemp = (id, temperature) => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new UpdateItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: {
        N: `${id}`,
      },
    },
    ExpressionAttributeNames: {
      "#T": "temperature",
      "#ID": "id",
    },
    ExpressionAttributeValues: {
      ":T": {
        N: `${temperature}`,
      },
      ":ID": {
        N: `${id}`,
      },
    },
    ConditionExpression: "#ID = :ID",
    UpdateExpression: "SET #T = :T",
    ReturnValues: "ALL_NEW",
  });

  return client
    .send(command)
    .then((dbObj) => {
      if (!dbObj.Attributes) {
        return Promise.reject({ status: 404, msg: "ID not found" });
      } else {
        return formatDynamoData(dbObj.Attributes);
      }
    })
    .catch((err) => {
      if (err.name === "ConditionalCheckFailedException") {
        return Promise.reject({ status: 404, msg: "ID not found" });
      } else {
        return Promise.reject(err);
      }
    });
};

exports.fetchZone = (hashKey) => {
  const client = new DynamoDBClient({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const command = new GetItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: { N: `${hashKey}` },
    },
  });
  return client.send(command).then((dbObj) => {
    if (!dbObj.Item) {
      return Promise.reject({ status: 404, msg: "ID not found" });
    } else return formatDynamoData(dbObj.Item);
  });
};
