$(function (){
    const token = getCookie("token_rma");

    $.ajax({
        type: "GET",
        headers: { 'x-access-token': token },
        url: "/duvidas"
    }).done(function (data) {
        //O RETORNO DA URL /duvidas É TODA A PÁGINA PRONTA. BASTA REESCREVER O CODIGO
        //alert(data);
        window.document.write(data);
    }).fail(function (req, mensagemStatus, mensagemErro) {
        //ESSES ALERTAS SERVEM PARA VC VISUALIZAR OS ERROS QUE FORAM RETORNADOS
        /* alert(req.status);
        alert(req.responseText);

        alert(mensagemStatus);
        alert(mensagemErro); */
        //TRATAR ERRO...
    });
});