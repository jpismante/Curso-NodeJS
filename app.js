const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Middleware -> Función que se ejecuta antes de otra acción.
//Servir contenido estático.

app.use( express.static('public'));


//Con APP.GET se generan las rutas para poder navegar.

//Pasando un objeto literal en la response, podemos enviar datos directamente a nuestra vista.-
app.get('/', (req, res) => {
    res.render('home', {
        name: "MacroCk",
        title: "Curso Node"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: "MacroCk",
        title: "Curso Node"
    });
});

app.get('*', (req, res) => {
    res.render('generic', {
        name: "MacroCk",
        title: "Curso Node"
    });
});

app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${port}` )
});
