import dotenv from 'dotenv';
dotenv.config();

const config = {
  emailjs: {
    secureToken: process.env.EMAILJS_SECURE_TOKEN,
    password: process.env.EMAILJS_PASSWORD,
  },
};

export default config;
