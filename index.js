const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Lorem ipsum",
    to: process.env.END_NUM,
    from: process.env.TWILIO_TRIAL_NUM,
  })
  .then((message) => console.log(message.sid));
