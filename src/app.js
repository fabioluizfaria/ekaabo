import express from 'express';
import path from 'path';

const app = express();

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

app.get('/contato', function(req, resp) {
    resp.render('contato.pug')
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

//divindades

app.get('/oxum', function(req, resp) {
    resp.render(__dirname + '/views/divindades/oxum.pug')
});

app.get('/afrodite', function(req, resp) {
    resp.render(__dirname + '/views/divindades/afrodite.pug')
});





export default app;