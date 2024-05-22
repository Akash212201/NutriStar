require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const Auth = async (req, resp) => {
  try {
    const OTP = "123565"
    const { number, email } = req.body;
    await client.messages
      .create({
        body: `Your verification code for ${number} is ${OTP}`,
        messagingServiceSid: "",
        to: '+917900345824'
      })
      .then(() => resp.status(200).json({ msg: "meggage send successfully" }))
      .done()
  } catch (error) {
    resp.status(500).json({
      success: false,
      msg: error
    })
  }
}
module.exports = Auth