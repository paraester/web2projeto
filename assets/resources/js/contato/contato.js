var $$ = function (id) {
    return document.getElementById(id);
}

function validaContato() {
    var nome = $$("name").value;
    var email = $$("email").value;
    var message = $$("message").value;
    if ((nome === null) || (nome === "")) {
        document.alert("Preencha o campo nome");
        return false;
    } else if ((email === null) || (email === "")) {
        document.alert("Preencha o campo email");
        return false;
    } else if ((message === null) || (message === "")) {
        document.alert("Preencha o campo mensagem");
        return false;
    }
    enviadoContato();
    return true;
}

function enviadoContato() {
    document.getElementById("contact-form").innerHTML = ("REGISTROS ENVIADOS");
}

function tagNegrito() {
    $("p").css("color", "black");
}


function tagDesnegrito() {
    $("p").css("color", "gray");

}

(function () { //função auto-executável
    tagDesnegrito();
    //se houver algum css negrito remover
});