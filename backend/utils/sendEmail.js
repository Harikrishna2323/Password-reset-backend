const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  console.log(process.env.SMTP_USER, process.env.SMTP_PASSWORD);
  const message = {
    from: `${process.env.SMTP_USER}  <${process.env.SMTP_FROM}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(message);
};

module.exports = sendEmail;
