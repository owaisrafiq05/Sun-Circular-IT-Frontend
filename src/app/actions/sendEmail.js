'use server';

export async function sendEmail(data) {
  const nodemailer = await import('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Add to .env file
      pass: process.env.EMAIL_PASSWORD // Add to .env file
    }
  });

  const mailOptions = {
    from: data.email,
    to: 'hero2911321@gmail.com',
    subject: `New Contact Form Submission from ${data.fullName}`,
    text: `Name: ${data.fullName}\nCompany: ${data.companyName}\nEmail: ${data.email}\nPhone: ${data.phone}\nMobile: ${data.mobile}\nMessage: ${data.message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return { ok: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { ok: false };
  }
}
