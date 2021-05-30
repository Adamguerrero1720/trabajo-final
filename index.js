const { request } = require("express");
const express = require("express");
const app = express();

const PORT = 3000;


app.get('/',(req,res)=>{
    res.send('Ruta de inicio de nuestro proyecto');
})

app.get('/Galeria',(req,res)=>{
    res.send('Pagina de Galeria');
})

app.get('/Destino',(req,res)=>{
    res.send('Pagina de Destino');
})


app.get('/Nosotros',(req,res)=>{
    res.send('Pagina de Nostros');
})


app.get('/Contacto',(req,res)=>{
    res.send('Pagina de Contacto');
})


app.get('/',(req,res)=>{
    res.send('Ruta de inicio de nuestro proyecto');
})

app.listen(PORT, ()=>{
    console.log (`Server on http://localhost:${PORT}`);
})

