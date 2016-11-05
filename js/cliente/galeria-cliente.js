function showBotao() {
    var div = document.getElementById("botao");
    var verRetirar = document.getElementById("retirar");
    /* se conteúdo está escondido, mostra e troca o valor do botão selecionar para: esconde */
    if (div.style.display === "none" && verRetirar.style.display === "none") {
        document.getElementById("botao").value = "esconde";
        div.style.display = "block";
    }
}

function escondeBotaoSelecionar() {
    var div = document.getElementById("botao");
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display === "block") {
        /* se conteúdo está a mostra, esconde o conteúdo e troca o valor do botão selecionar para: mostra */
        div.style.display = "none";
        document.getElementById("botao").value = "mostra";
    }
}

function escondeBotaoRetirar() {
    var divretirar = document.getElementById("retirar");
    var selecionouEstaFotoVerificar = document.getElementById("selecionouEstaFoto");
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (divretirar.style.display === "block") {
        divretirar.style.display = "none";
        document.getElementById("retirar").value = "mostra";
    }
    if (selecionouEstaFotoVerificar.style.display === "block") {
        document.getElementById("selecionouEstaFoto").value = "esconde";
        selecionouEstaFotoVerificar.style.display = "none";
    }
}


function ativaRetirar() { //cliente voltou na foto e quer retirar a foto que estava selecionada
    var retirar = document.getElementById("retirar");
    if (retirar.style.display === "none") {
        document.getElementById("retirar").value = "esconde";
        retirar.style.display = "block";
    }
}

function clienteSelecionou() { //cliente clicou em selecionar
    var selecionouEstaFoto = document.getElementById("selecionouEstaFoto");
    if (selecionouEstaFoto.style.display === "none") {
        document.getElementById("selecionouEstaFoto").value = "esconde";
        selecionouEstaFoto.style.display = "block";
    }
    ativaRetirar();
}
