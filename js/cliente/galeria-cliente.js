function showBotao() {
    var div = document.getElementById("botao")
        /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == "none") {
        document.getElementById("botao").value = "esconde"
        div.style.display = "block"
    }
}

function escondeBotao() {
    var div = document.getElementById("botao")
        /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display == "block") {
        /* se conteúdo está a mostra, esconde o conteúdo e troca o valor do botão para: mostra */
        div.style.display = "none"
        document.getElementById("botao").value = "mostra"
    }
}
