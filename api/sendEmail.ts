import nodemailer from "nodemailer";
import contactFormEmailTemplate from "../templates/contactFormEmailTemplate ";

const user = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: password,
      },
      port: 587,
      tls: { rejectUnauthorized: false },
    });
  }

  public async sendEmail(name: string, email: string, message: string) {
    try {
      const emailTemplate = contactFormEmailTemplate(name, email, message);

      const mailOptions = {
        from: user,
        to: user,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
      };

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.log(`Error sending email: ${error}`);
      return false;
    }
  }

  public async verifyTransporter() {
    try {
      await this.transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (error) {
      console.error("SMTP connection verification failed:", error);
      throw error;
    }
  }
}

const emailService = new EmailService();
emailService.verifyTransporter();

export default emailService.sendEmail;

//   import nodemailer from "nodemailer";

// import contactFormEmailTemplate from "../templates/contactForm";

// const user = process.env.EMAIL_USER;
// const password = process.env.EMAIL_PASS;

// // transporter: nodemailer.Transporter;
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: user,
//     password: password,
//   },
//   port: 587,
//   tls: { rejectUnauthorized: false },
// });

// const sendEmail = async (name, email, message) => {
//   try {
//     const emailTemplate = contactFormEmailTemplate(name, email, message);

//     const mailOptions = {
//       from: user,
//       to: user,
//       subject: emailTemplate.subject,
//       html: emailTemplate.html,
//     };

//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error) {
//     console.log(`Error sending email: ${error}`);
//     return false;
//   }
// };

// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// export default sendEmail;
