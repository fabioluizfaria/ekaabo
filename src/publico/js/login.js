/**
 * Requisições Post - Login
 */
$(function() {
    //IDENTIFICA O CLICK NO BOTÃO ENVIAR E CHAMA A FUNÇÃO login()
    $('#enviar').on('click', login);
});

function login() {
    //PEGA OS DADOS PREENCHIDOS NO FORMULÁRIO
    let dados = {
            email: $('#email').val(),
            senha: $('#senha').val()
        }
        //FAZ REQUISIÇÃO À URL QUE EFETUA O LOGIN (AUTENTICAÇÃO)
    $.post("/login", dados, function(data, status, req) {

        //Se necessário, tratar dados de retorno
        //alert(JSON.stringify(data));

        //Pegar token do header vindo na resposta
        let token = req.getResponseHeader("Authorization");
        setCookie("token_rma", token, 30);
        //alert("Cookie criado");

        pegaRespostas();

    }).fail(function(req, mensagemStatus, mensagemErro) {
        alert(req.status);
        alert(mensagemStatus);
        alert(mensagemErro);

        //TRATAR ERRO...
    });

}



function pegaRespostas() {
    const token = getCookie("token_rma");

    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/duvidas"
    }).done(function(data) {
        //O RETORNO DA URL /duvidas É TODA A PÁGINA PRONTA. BASTA REESCREVER O CODIGO
        //alert(data);
        window.document.write(data);
    }).fail(function(req, mensagemStatus, mensagemErro) {
        //ESSES ALERTAS SERVEM PARA VC VISUALIZAR OS ERROS QUE FORAM RETORNADOS
        /* alert(req.status);
        alert(req.responseText);

        alert(mensagemStatus);
        alert(mensagemErro); */
        //TRATAR ERRO...
    });
}