import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  console.log('Testing connection with:');
  console.log(`Email: ${process.env.EMAIL_USER}`);
  console.log(`Password length: ${process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0} characters`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('✅ SUCCESS: Connection verified! Your credentials are correct.');
    
    console.log('Sending test email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: 'Test Email from Website Backend',
      text: 'If you are reading this, your email configuration is working perfectly!',
    });
    console.log('✅ SUCCESS: Test email sent!');
  } catch (error) {
    console.error('❌ FAILED:');
    if (error.responseCode === 535) {
      console.error('Error 535: Username and Password not accepted.');
      console.error('Note: This usually means you need a 16-character App Password.');
    } else {
      console.error(error);
    }
  }
}

testConnection();
