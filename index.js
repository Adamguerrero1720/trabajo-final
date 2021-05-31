const express = require("express");
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const { reverse } = require("dns");
const { request } = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//Configuaracion de correo
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "adamguerrero2021@gmail.com", // generated ethereal user
      pass: "ctmuwmoqvmxxoaqv", // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
      console.log('Listo para enviar correo!');
  });

//Settings
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname,  'views'));
app.use (express.static(path.join(__dirname,  'public')));
app.use(express.urlencoded({
    extended: false
}));

//Handlebars Config
app.engine('.hbs',
hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get ('views'), 'layout'),
    partialsDir: path.join(app.get ('views'), 'partials'),
    extname: ".hbs",
})
);

app.get('/',(req,res)=>{
    res.render('Home',{ruta:"css/Index.css"});
})

app. post ('/', async(req, res)=>{
    // send mail with defined transport object
   await transporter.sendMail({
   from: "adamguerrero2021@gmail.com", // sender address
   to: "adamguerrero2021@gmail.com", // list of receivers
   subject: `${req.body.fullname} Requiere de su atención sobre: ${req.body.asunto}`, // Subject line
   html: `<h4>Nombre: ${req.body.fullname}</h4>
       <h4>Correo: ${req.body.email}</h4>
       <h4>Telefono: ${req.body.phone}</h4>
       <h4>Solicita la siguiente información:</h4>
   <h4>${req.body.message}</h4>` // html body
 });
   res.redirect('/');
})

app.get('/Destino',(req,res)=>{
    res.render('Destino',{ruta:"css/Destino.css"});
})

app.get('/Galeria',(req,res)=>{
    res.render('Galeria',{ruta:"css/Galeria.css"});
})

app.get('/Nosotros',(req,res)=>{
    res.render('Nosotros',{ruta:"css/Nosotros.css"});
})

app.get('/Contacto',(req,res)=>{
    res.render('Contacto',{ruta:"css/Contacto.css"});
})

app. post ('/Contacto', async(req, res)=>{
    // send mail with defined transport object
   await transporter.sendMail({
   from: "adamguerrero2021@gmail.com", // sender address
   to: "adamguerrero2021@gmail.com", // list of receivers
   subject: `${req.body.fullname} Requiere de su atención sobre: ${req.body.asunto}`, // Subject line
   html: `<h4>Nombre: ${req.body.fullname}</h4>
       <h4>Correo: ${req.body.email}</h4>
       <h4>Telefono: ${req.body.phone}</h4>
       <h4>Solicita la siguiente información:</h4>
   <h4>${req.body.message}</h4>` // html body
 });
   res.redirect('/');
})

app.get((req,res)=>{
    res.render('404',{ruta:"css/404.css"});
})

app.listen(PORT, ()=>{
    console.log(app.get('views'))
    console.log(__dirname);
    console.log (`Server at http://localhost:${PORT}`);
})

