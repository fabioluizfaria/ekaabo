const Duvidas = require('./DuvidasRoute');
const Usuarios = require('./usuariosRoute');

/**
Sintaxe de uma função qualquer: function() {}
Sintaxe de uma arrow function: () => {}
 */
module.exports = app => {
    app.use(Duvidas),
        app.use(Usuarios);
}