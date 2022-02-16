const twilio = require("twilio");
const dotenv = require("dotenv");

dotenv.config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: "Lorem ipsum",
//     to: process.env.END_NUM,
//     from: process.env.TWILIO_TRIAL_NUM,
//   })
//   .then((message) => console.log(message.sid));

client.calls
  .create({
    url: "http://localhost:5000/voice",
    to: process.env.END_NUM,
    from: process.env.TWILIO_TRIAL_NUM,
  })
  .then((call) => console.log(call.sid));

// client.calls.each((call) => console.log(call));
// client.messages
//   .list()
//   .then((calls) => calls.forEach((call) => console.log(call.body)))
//   .catch((err) => console.log(err));
// client
//   .calls("CA8a43c8acadbda437771e3f74f5b7caf4")
//   .fetch()
//   .then((call) => console.log(call));

// client.messages
//   .create({
//     body: "Lorem Ipsum",
//     from: process.env.WHATSAPP_TWILIO_TRIAL_NUM,
//     to: process.env.WHATSAPP_END_NUM,
//   })
//   .then((message) => console.log(message.sid))
//   .done();
