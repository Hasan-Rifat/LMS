import nodemailer from "nodemailer";
import config from "../config";

const sendVerifyMail = async (name: string, email: string, order: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass,
      },
    });

    const mailOptions = {
      from: config.nodemailer.user,
      to: email,
      subject: "Verify your account",
      html: `<h1>Hi ${name}</h1><br><p>Your Order</p>
      <p>your email ${email}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
  } catch (error) {}
};

export default sendVerifyMail;
