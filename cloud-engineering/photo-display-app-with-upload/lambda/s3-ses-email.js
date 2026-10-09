import { S3 } from '@aws-sdk/client-s3';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "eu-west-2" });

console.log('Loading function');
const s3 = new S3();


export const handler = async (event) => {

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };
    try {
        const { ContentType } = await s3.getObject(params);
        console.log('CONTENT TYPE:', ContentType);

        const command = new SendEmailCommand({
            Destination: {
              ToAddresses: ["REPLACE.ME.WITH.RECIPIENT@SOME_EMAIL.COM"],
            },
            Message: {
              Body: {
                Text: { Data: "Good news! One of the friends has added a new photo to your album!" },
              },
        
              Subject: { Data: "Shiny new photo added" },
            },
            Source: "REPLACE.ME.WITH.SENDER@SOME_EMAIL.COM",
        });

        const response = await ses.send(command);
        return response;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
