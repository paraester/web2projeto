var $$ = function (id) {
    return document.getElementById(id);
}

function validaContato() {
    var nome = $$("name").value;
    console.log("nome" + nome);
    var email = $$("email").value;
    var message = $$("message").value;
    if ((nome == null) || (nome == "")) {
        alert("Preencha o campo nome");
        return false;
    } else if ((email == null) || (email == "")) {
        alert("Preencha o campo email");

        return false;
    } else if ((message == null) || (message == "")) {
        alert("Preencha o campo mensagem");

        return false;
    }
    enviadoContato();
    return true;

}

$(document).ready(function () {
    $('input').val('Informações enviadas')
})


function enviadoContato() {
    document.getElementById("contact-form").innerHTML = ("REGISTROS ENVIADOS");
}