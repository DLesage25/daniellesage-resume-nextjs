import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: '',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: '',
        pass: '',
    },
});

export const verifyMailer = () => {
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
};
