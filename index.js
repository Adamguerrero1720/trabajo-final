const express = require("express");
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

//Settings
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname,  'views'));
app.use (express.static(path.join(__dirname,  'public')));

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


app.get((req,res)=>{
    res.render('404',{ruta:"css/404.css"});
})

app.listen(PORT, ()=>{
    console.log(app.get('views'))
    console.log(__dirname);
    console.log (`Server at http://localhost:${PORT}`);
})

