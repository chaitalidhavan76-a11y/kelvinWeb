import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();

dns.setDefaultResultOrder('ipv4first'); // ⭐ VERY IMPORTANT (fix Gmail IPv6 issue)

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    EMAIL_USER: process.env.EMAIL_USER ? 'Set ✅' : 'Not Set ❌',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Set ✅' : 'Not Set ❌'
  });
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000
});

app.post('/api/contact', async (req, res) => {

  const { name, email, contactNo, message } = req.body;

  if (!name || !email || !contactNo || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {

    console.log("Sending email via Gmail SMTP...");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Contact Number: ${contactNo}
Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent");

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    console.error("❌ EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.code || "EMAIL_FAILED",
      details: error.message
    });

  }

});

app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});