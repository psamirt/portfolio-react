import { Request, Response, Router } from 'express';
const router = Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL, PASS, TO_EMAIL } = process.env;

router.post('/send', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: EMAIL,
        pass: PASS
      }
    });

    const result = await transporter.sendMail({
      from: EMAIL,
      to: TO_EMAIL,
      subject: 'Portafolio contactado',
      text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
    });
    console.log(result);
    res.status(200).json({ ok: true, message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al enviar el correo');
  }
});

module.exports = router;
