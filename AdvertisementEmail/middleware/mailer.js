import {config} from 'dotenv';
config();
import nodemailer from 'nodemailer';
import {otpEmailTemplate} from "../templates/otpTemplate.js";


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
});

const SendOptEmail = async(email ,otp) =>{
    
    const mailOptions = {
        from : process.env.ADMIN_EMAIL,
        to : email,
        subject : "OTP verification Code",
        html : otpEmailTemplate(otp)
    }

    const info = await transporter.sendMail(mailOptions);

    return info;
}

export default SendOptEmail;