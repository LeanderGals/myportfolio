import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://leandergals.netlify.app', // Replace with your Netlify URL
    methods: 'POST',
    allowedHeaders: ['Content-Type']
}));

// Email sending function
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
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
app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
