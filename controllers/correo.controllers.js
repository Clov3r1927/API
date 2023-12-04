const nodemailer = require('nodemailer')
const fs = require("fs")


// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
    // Configura tu proveedor de correo y autenticación aquí
    service: "Gmail",
    auth: {
      user: "mycmueblessobrediseno64@gmail.com",
      pass: "kche xjuk cobi hafy",
    },
  });
  

const enviarCorreo = async (req, res) => {
  try {
    const { asunto, cuerpo } = req.body;
    const imagenUrl = "https://github.com/Clov3r1927/M-C/blob/main/logo.jpg?raw=true"

   
    const mailOptions = {
      from: "mycmueblessobrediseno64@gmail.com",
      to: "cloverstarcortez@gmail.com",
      subject: asunto,
      html: `
      <p>${cuerpo}</p>
      <div style="display: block; width: 100%;">
        <img src="${imagenUrl}" alt="Imagen adjunta" style="width: 400px; height: 400px;" />
       
      </div>
      `,
    
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.response);
    res.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
};


module.exports ={
    enviarCorreo
}
