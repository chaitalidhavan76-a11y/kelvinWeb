import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Root route for diagnostics
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Health check route to verify environment variables (WITHOUT exposing secrets)
app.get('/health', (req, res) => {
  const emailUser = process.env.EMAIL_USER ? 'Set ✅' : 'Not Set ❌';
  const emailPass = process.env.EMAIL_PASS ? 'Set ✅' : 'Not Set ❌';
  res.json({
    status: 'online',
    environment: {
      EMAIL_USER: emailUser,
      EMAIL_PASS: emailPass
    }
  });
});

// Dedicated test route that returns full error details
app.get('/test-email', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('Testing SMTP connection...');
    await transporter.verify();
    
    console.log('Sending diagnostic email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: 'Diagnostic Test',
      text: 'SMTP connection is working correctly.'
    });

    res.json({ status: 'success', message: 'SMTP is working!' });
  } catch (error) {
    console.error('Diagnostic Failure:', error);
    res.status(500).json({ 
      status: 'failed', 
      error: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, contactNo, message } = req.body;

  if (!name || !email || !contactNo || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Log to confirm variables are being picked up (hide password for security)
    console.log(`Attempting to send email from: ${process.env.EMAIL_USER}`);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Backend is missing EMAIL_USER or EMAIL_PASS in .env');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || 'info@kelvinengineers.com',
      subject: `New Contact Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNo}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Provide more specific error info if possible (safe bits)
    const clientErrorMessage = error.code === 'EAUTH' 
      ? 'Authentication failed. Please check backend EMAIL_PASS.' 
      : 'Failed to send email. Please try again later.';
    
    res.status(500).json({ 
      error: clientErrorMessage,
      details: error.message // Sharing the message helps debugging on free tiers
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
