// Módulos
const express = require('express');
const app = express();

// Acá falta uno... 😇
app.set('view engine', 'ejs');

// Configuración
app.use(express.static('public'));
// Acá falta el template engine

// Rutas
const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

// Acá falta el archivo de rutas y después las vistas de EJS
/* app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
}); */

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})