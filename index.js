const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

const accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Lorem ipsum",
    to: process.env.END_NUM, // Text this number
    from: process.env.TWILIO_TRIAL_NUM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
