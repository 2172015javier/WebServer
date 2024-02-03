require('dotenv').config();
const express = require('express');
const app  = express();
const hbs = require('hbs');
const port = process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use(express.static('public'));


app.get ('/',  (req, res)=>{
    res.render('home', {
        nombre: ' Javier Tarazona',
        titulo: 'Curso de Node.js'
    });
})
app.get ('/generic',  (req, res)=>{
    res.render('generic', {
        nombre: ' Javier Tarazona',
        titulo: 'Curso de Node.js'
    });
})
app.get ('/elements',  (req, res)=>{
    res.render('elements', {
        nombre: ' Javier Tarazona',
        titulo: 'Curso de Node.js'
    });
})
app.get ('/generic',  (req, res)=>{
    res.sendFile(__dirname+'/public/generic.html');
})
app.get ('/elements',  (req, res)=>{
    res.sendFile( __dirname + '/public/elements.html');
})
app.get ('/*',  (req, res)=>{
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, ()=>{
    console.log(`el servidor esta coriendo en http://localhost:${port}/`);
    
    
})