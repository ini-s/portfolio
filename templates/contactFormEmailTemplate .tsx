const contactFormEmailTemplate = (
  name: string,
  email: string,
  message: string
) => {
  const subject = `New message from ${name}`;

  const htmlContent = `
      <p>Hello ${name},</p>
      <p>Thank you for reaching out to me! I have received your message and I will respond as soon as possible.</p>
      <p>Best regards,</p>
      <p>Inioluwa</p>
    `;

  return { subject, html: htmlContent };
};
export default contactFormEmailTemplate;
