import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Email sending function
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS  // Your email app password
        }
    });

    // Email details
    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your email
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Failed to send email', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
