const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HTML_TEMPLATE = require("../utils/templates/mail-template")
const nodemailer = require('nodemailer');
const createError = require("http-errors");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_ADMIN_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const createMailOptions = (name, phone, email) => ({
    from: process.env.EMAIL_ADMIN_USER,
    to: process.env.EMAIL_RECEIVER_USER,
    subject: 'Отправка сообщения от сайта',
    html: HTML_TEMPLATE(name, phone, email),
})

router.post(
    "/send",
    (req, res) => {
        const {name, phone, email} = req.body

        transporter.sendMail(createMailOptions(name, phone, email), function(error, info){
            if (error) {
                throw createError(500, error);
            } else {
                res.status(200).json({
                    message: "Сообщение успешно отправлено"
                })
            }
        });
    }
);

module.exports = router;
