"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;
router.post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    try {
        const accessToken = yield oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'contacto.paolotello@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refresh_token: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });
        const mailOptions = {
            from: 'contacto.paolotello@gmail.com',
            to: 'p_samir@hotmail.com',
            subject: 'Portafolio contactado',
            text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
            // Puedes personalizar el cuerpo del mensaje aquí con los datos del formulario.
        };
        const result = yield transporter.sendMail(mailOptions);
        res.status(200).send('enviado');
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo');
    }
}));
module.exports = router;
