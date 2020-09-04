const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')

//inicializacion del projecto
const app = express();

// ruta de las carpertas
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname,'public')));

//Settings
app.engine('.hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
}));
app.set('view engine', '.hbs')

//rutasWeb
var routes = require('./routes/routesWeb');
routes(app);



module.exports = app;