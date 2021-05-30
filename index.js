const express = require("express");
const hbs = require('express-handlebars');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 4000;
//Settings
app.set("views engine", ".hbs");
app.set('views', path.join(__dirname,  'views'));
app.use (express.static(path.join(__dirname,  'public')));

//Handlebars Config
app.engine('.hbs',
hbs({
    defaultLayout: "main",
    layoutDir: path.join(app.get ('views'), 'layout'),
    partialsDir: path.join(app.get ('views'), 'partials'),
    extname: ".hbs"
})
);


app.get('/',(req,res)=>{
    res.send('Ruta de inicio de nuestro proyecto');
})

app.get('/Galeria',(req,res)=>{
    res.send('Pagina de Galeria');
})

app.get('/Destino',(req,res)=>{
    res.send('Pagina de Destino');
})

app.get('/Galeria',(req,res)=>{
    res.send('Pagina de Galeria');
})

app.get('/Nosotros',(req,res)=>{
    res.send('Pagina acerca de Nostros');
})


app.get('/Contacto',(req,res)=>{
    res.send('Pagina de contactame');
})


app.get((req,res)=>{
    res.send('404');
})

app.listen(PORT, ()=>{
    console.log(app.get('views'))
    console.log(__dirname);
    console.log (`Server at http://localhost:${PORT}`);
})

