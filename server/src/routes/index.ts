import { Request, Response, Router } from 'express';
const router = Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

router.post('/send', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
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

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send('enviado');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al enviar el correo');
  }
});


module.exports = router;
