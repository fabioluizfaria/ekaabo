import express from 'express';
import path from 'path';

const app = express();

require('dotenv').config()
    //http://expressjs.com/en/resources/middleware/cors.html
const cors = require('cors');

var corsOptions = {
    exposedHeaders: 'Authorization'
}

app.use(cors(corsOptions));


/**
 * Configuração do parser para requisições post
 */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


/* Alias */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'))
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'))
app.use('/jquery', express.static('./node_modules/jquery/dist'))
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'))
app.use('/publico', express.static(__dirname + '/publico'))


/* Config páginas */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/teste', function(req, resp) {
    resp.render('testes')
});


/* Rotas Pug*/
app.get('/', function(req, resp) {
    resp.render('inicio.pug')
});

app.get('/inicio', function(req, resp) {
    resp.render('inicio.pug')
});

app.get('/conteudos', function(req, resp) {
    resp.render('conteudos.pug')
});

app.get('/quemSomos', function(req, resp) {
    resp.render('quemSomos.pug')
});

app.get('/divindades', function(req, resp) {
    resp.render('divindades.pug')
});

/*app.get('/contato', function(req, resp) {
    resp.render('contato.pug')
});*/

app.get('/referencial', function(req, resp) {
    resp.render('referencial.pug')
});

app.get('/tema1', function(req, resp) {
    resp.render('tema1.pug')
});

app.get('/tema2', function(req, resp) {
    resp.render('tema2.pug')
});

app.get('/tema3', function(req, resp) {
    resp.render('tema3.pug')
});

app.get('/tema4', function(req, resp) {
    resp.render('tema4.pug')
});

app.get('/tema5', function(req, resp) {
    resp.render('tema5.pug')
});

app.get('/acessarlogin', function(req, resp) {
    resp.render('login.pug')
});

//divindades

app.get('/oxum', function(req, resp) {
    resp.render(__dirname + '/views/divindades/oxum.pug')
});

app.get('/afrodite', function(req, resp) {
    resp.render(__dirname + '/views/divindades/afrodite.pug')
});

app.get('/iemanja', function(req, resp) {
    resp.render(__dirname + '/views/divindades/iemanja.pug')
});

app.get('/iara', function(req, resp) {
    resp.render(__dirname + '/views/divindades/iara.pug')
});

app.get('/poseidon', function(req, resp) {
    resp.render(__dirname + '/views/divindades/poseidon.pug')
});

app.get('/exu', function(req, resp) {
    resp.render(__dirname + '/views/divindades/exu.pug')
});

app.get('/hermes', function(req, resp) {
    resp.render(__dirname + '/views/divindades/hermes.pug')
});

app.get('/atena', function(req, resp) {
    resp.render(__dirname + '/views/divindades/atena.pug')
});

app.get('/orunmila', function(req, resp) {
    resp.render(__dirname + '/views/divindades/orunmila.pug')
});

app.get('/iansa', function(req, resp) {
    resp.render(__dirname + '/views/divindades/iansa.pug')
});

app.get('/tupa', function(req, resp) {
    resp.render(__dirname + '/views/divindades/tupa.pug')
});

app.get('/zeus', function(req, resp) {
    resp.render(__dirname + '/views/divindades/zeus.pug')
});

app.get('/oxossi', function(req, resp) {
    resp.render(__dirname + '/views/divindades/oxossi.pug')
});

app.get('/artemis', function(req, resp) {
    resp.render(__dirname + '/views/divindades/artemis.pug')
});

app.get('/respostas', function(req, resp) {
    resp.sendFile(__dirname + '/views/middlewareRespostas.html');
});

const routes = require('./routes');
routes(app);


export default app;