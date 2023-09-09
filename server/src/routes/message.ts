import express from 'express'
import nodemailer from 'nodemailer'
require('dotenv').config();
const {EMAIL_PASS, EMAIL_USER} = process.env
const router = express.Router()



router.post('/message', async ( req, res)=>{
    try{
        const {name, email, message} = req.body

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        })

        const mailOptions = {
            from: 'tu.correo',
            to: 'destinatario.com',
            subject: 'mensaje del contacto:',
            text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
        }
            await transporter.sendMail(mailOptions)
            
            res.status(200).json({message: 'Mensaje enviado con éxito'})
        } catch (error){
            console.error('Error al enviar el mensaje:', error)
            res.status(500).json({error: 'Error al enviar el mensaje'})
        }
    
})

export default router