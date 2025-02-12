function submitForm(formId) {
    let form = document.getElementById(formId);
    let dados = {
            resposta: form.resposta.value,
            publicar: form.publicar.checked
        }
        //FAZ A SUBMISSÃO DO FORMULÁRIO PARA ATUALIZAR A RESPOSTA
    const token = getCookie("token_rma");
    $.ajax({
        type: "PUT",
        headers: { 'x-access-token': token },
        url: `/duvidas/${formId}`,
        data: dados
            //CASO DÊ TUDO CERTO, O METODO DONE É EXECUTADO
    }).done(function(data) {
        //NO MÉDOTO atualizaDuvida, CASO VC QUERIA, AO INVÉS DE FINALIZAR A REQUISOÇÃO (return res.end();), 
        //VC PODE RETORNAR ALGUM OBJETO JSON. CASO RETORNE, PODE PEGÁ-LO. O ALERTA ABAIXO APRESENTA ESSE RETORNO
        //alert(JSON.stringify(data));

        //ESTANDO TUDO OK, UMA MENSAGEM É APRESENTADA JUNTO AO BOTÃO
        let s = document.getElementById(`msgResp${form.id}`);
        s.innerHTML = "Resposta atualizada!";
        //CASO DÊ ERRO, O MÉTODO FAIL É EXECUTADO
    }).fail(function(req, mensagemStatus, mensagemErro) {

        //ESSES ALERTAS SERVEM PARA VC VISUALIZAR OS ERROS QUE FORAM RETORNADOS
        /* alert(req.status);
        alert(req.responseText);

        alert(mensagemStatus);
        alert(mensagemErro); */

        //CASO QUERIA, OS ERROS PODEM SER TRATADOS AQUI
    });
}