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
require('dotenv').config();
const { EMAIL, PASS, TO_EMAIL } = process.env;
router.post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: EMAIL,
                pass: PASS
            }
        });
        const result = yield transporter.sendMail({
            from: EMAIL,
            to: TO_EMAIL,
            subject: 'Portafolio contactado',
            text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
        });
        console.log(result);
        res.status(200).json({ ok: true, message: 'Mensaje enviado con éxito' });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo');
    }
}));
module.exports = router;
