import app from './app';

const PORTA = process.env.PORT || 8088

app.listen(PORTA, function() {
    console.log(`Servidor rodando na porta ${PORTA}`)
});