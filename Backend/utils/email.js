const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendEmail = async ({ to, subject, text, html }) => {
  return await exports.transporter.sendMail({
    from: `"Left2Right" <${process.env.EMAIL_USER}>`,
    to, subject, text, html
  });
};