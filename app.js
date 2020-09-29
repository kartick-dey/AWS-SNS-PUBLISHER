require('dotenv').config();

const AWS = require('aws-sdk');

AWS.config.region = process.env.REGION

const send_SNS_notification = ()  => {
    const sns = new AWS.SNS();
    sns.publish({
        Subject: "TEST SNS",
        Message: 'From node js app ---- 12',
        TopicArn: process.env.TOPIC_ARN
    }, function (err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log('Message Sent!');
        console.log("Response data: ", data);
    });
}

send_SNS_notification();