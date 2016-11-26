var $$ = function (id) {
    return document.getElementById(id);
}

function validaContato() {
    var nome = $$("name").value;
    var email = $$("email").value;
    var message = $$("mensage").value;

    if ((nome === null) || (nome === "")) {
        document.alert("Preencha o campo nome");
        return false;
    }

    if ((email === null) || (email === "")) {
        document.alert("Preencha o campo email");
        return false;
    } else if ((message === null) || (message === "")) {
        document.alert("Preencha o campo mensagem");
        return false;
    }
    enviadoContato();
    return true;
}

function validarString(campo, event) {
    var id = event.target.id;
    if (campo == "nome") {
        //trate nome
        validarNome(id, event.target.value);
    } else if (campo == "email") {
        //trate nome
        validarEmail(id, event.target.value);
    } else if (campo == "mensagem") {
        //trate nome
        validarMensage(id, event.target.value);
    }
}

function validarNome(id, txt) {
    var mensage = $('#lb' + id);
    if (txt.length > 30) {
        mensage.html(txt.substr(0, 25) + " ... " + txt.substr(txt.length - 4, 4));
    } else {
        mensage.html(txt);
    }
}

function validarEmail(id, txt) {
    var mensage = $('#lb' + id);
    if (txt.length > 18) {
        mensage.html(txt.substr(0, 14) + " ... " + txt.substr(txt.length - 4, 4));
    } else {
        mensage.html(txt);
    }
}

function validarMensage(id, txt) {
    var mensage = $('#lb' + id);
    if (txt.length > 30) {
        mensage.html(txt.substr(0, 24) + " ... " + txt.substr(txt.length - 4, 4));
    } else {
        mensage.html(txt);
    }
}


function enviadoContato() {
    document.getElementById("contact-form").innerHTML = ("REGISTROS ENVIADOS");
}

window.onload = function () {
    var input_name = document.forms[0].name;
    var input_email = document.forms[0].email;
    var input_msg = document.forms[0].mensage;

    input_name.addEventListener('blur', function (e) {
        if (input_name.value == "")
            $("#lbname").html("Você esqueceu de preencher nome");
    });

    input_email.addEventListener('blur', function () {
        if (input_email.value == "")
            $("#lbemail").html("Você esqueceu de preencher email");
    });

    input_msg.addEventListener('blur', function () {
        if (input_msg.value == "")
            $("#lbmensage").html("Você esqueceu de preencher a mensagem");
    });

    input_name.addEventListener('focus', function () {
        input_name.style.color = '#fff';
        input_name.style.background = '#0080ff';

        input_email.style.color = '#000';
        input_email.style.background = '#fff';

        input_msg.style.color = '#000';
        input_msg.style.background = '#fff';
    });

    input_email.addEventListener('focus', function () {
        input_name.style.color = '#000';
        input_name.style.background = '#fff';

        input_email.style.color = '#fff';
        input_email.style.background = '#0080ff';

        input_msg.style.color = '#000';
        input_msg.style.background = '#fff';
    });

    input_msg.addEventListener('focus', function () {
        input_msg.style.color = '#fff';
        input_msg.style.background = '#0080ff';

        input_email.style.color = '#000';
        input_email.style.background = '#fff';

        input_name.style.color = '#000';
        input_name.style.background = '#fff';
    });
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