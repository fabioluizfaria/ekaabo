//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../dao/models');

class DuvidaController {

    static async criaDuvida(req, res) {
        const novaDuvida = req.body;
        console.log(req.body);
        try {
            const novaDuvidaCriada = await database.Duvidas.create(novaDuvida);
            //return res.status(200).json(novaDuvidaCriada);
            let mensagemOK = "Sua pergunta foi enviada!";
            res.render('contato', { mensagemOK });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTodasAsDuvidas(req, res) {
        try {
            //await: aguarda até receber a resposta do BD
            const todasAsDuvidas = await database.Duvidas.findAll();
            //return res.status(200).json(todasAsDuvidas);
            res.render('respostasView', { todasAsDuvidas });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaDuvida(req, res) {
        const novasInfosDuvida = req.body;
        const { id } = req.params;
        console.log(req.body);
        try {
            await database.Duvidas.update(novasInfosDuvida, { where: { id: Number(id) } });
            const duvidaAtualizada = await database.Duvidas.findOne({ where: { id: Number(id) } });
            //enviarEmail(email);
            return res.end();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaRespostas(req, res) {
        try {
            const respostas = await database.Duvidas.findAll({
                where: {
                    publicar: true
                }
            });
            //console.log(respostas);
            res.render('contato', { respostas });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    enviarEmail(email) {
        const request = require('request');

        request.post(process.env.TRUSTIFI_URL + '/api/i/v1/email', {
            headers: {
                'x-trustifi-key': process.env.TRUSTIFI_KEY,
                'x-trustifi-secret': process.env.TRUSTIFI_SECRET
            },
            json: { "recipients": [{ "email": email }], "title": "Title", "html": "Body" }
        }, (err, res) => {
            console.log(email);
        });
    }

}

module.exports = DuvidaController