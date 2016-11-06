function showBotao(i) {
    /*    var div = document.getElementById("botao" + i);
        var verRetirar = document.getElementById("retirar" + i);
        // se conteúdo está escondido, mostra e troca o valor do botão selecionar para: esconde
        if (div.style.display === "none" && verRetirar.style.display === "none") {
            div.value = "esconde";
            div.style.display = "block";
        }
    */
    var div = $("#botao" + i); //uso de seletores CSS por id
    var verRetirar = $("#retirar" + i);
    if (div.is(":visible") || verRetirar.is(":visible")) {
        return;
    } else {
        div.css('display', 'block'); //uso de seletores CSS por id
        div.css('color', 'white'); //uso de seletores CSS por id
        div.show();
    }
}

function escondeBotaoSelecionar(i) {
    var div = document.getElementById("botao" + i);
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */
    if (div.style.display === "block") {
        /* se conteúdo está a mostra, esconde o conteúdo e troca o valor do botão selecionar para: mostra */
        div.style.display = "none";
    }
}


var jsonClienteX = {
    pasta: "assets/resources/img/clients/cliente/",
    extensao: ".jpg",
    fotos: [
        {
            arquivo: '2',
            escolhido: false
        },
        {
            arquivo: '20',
            escolhido: false
        },
        {
            arquivo: '3',
            escolhido: false
        },
        {
            arquivo: '4',
            escolhido: false
        },
        {
            arquivo: '5',
            escolhido: false
        },
        {
            arquivo: '20',
            escolhido: false
        },
        {
            arquivo: '6',
            escolhido: false
        },
        {
            arquivo: '8',
            escolhido: false
        },
        {
            arquivo: '9',
            escolhido: false
        },
        {
            arquivo: '10',
            escolhido: false
        },
        {
            arquivo: '11',
            escolhido: false
        },
        {
            arquivo: '12',
            escolhido: false
        },
        {
            arquivo: '13',
            escolhido: false
        },
        {
            arquivo: '14',
            escolhido: false
        },
        {
            arquivo: '15',
            escolhido: false
        },
        {
            arquivo: '16',
            escolhido: false
        },
        {
            arquivo: '17',
            escolhido: false
        },
        {
            arquivo: '18',
            escolhido: false
        },
        {
            arquivo: '19',
            escolhido: false
        },
	],
}

function zoomFotoLinha(i) {



}

function alternarEscolhaDaFoto(i) {
    var div = $("#botao" + i); //uso de seletores CSS por id
    console.log("valor que continha " + div.html());
    if (div.html() == "Selecionar") {
        div.toggle('slow').toggle('slow');
        div.html("Retirar");
        jsonClienteX.fotos[i].escolhido = true;
        div.removeClass('btn-success').addClass('btn-warning');
        $("#selecionouEstaFoto" + i).toggle('slow');
        div.fadeOut(500);
    } else {
        div.html("Selecionar");
        jsonClienteX.fotos[i].escolhido = false;
        div.removeClass('btn-warning').addClass('btn-success');
        $("#selecionouEstaFoto" + i).toggle('slow');
    }
}

function exibirFotosAoIniciar() {
    // objeto global do cliente da base de dados na variavel jsonClienteX

    var htmlInner = "";
    for (var i = 0; i < jsonClienteX.fotos.length; i++) {
        htmlInner += '<li>\n<div class = "caption img-wrapper" onmouseover="showBotao(' + i + ');" onmouseout="escondeBotaoSelecionar(' + i + ');" style="position:relative;">\n<img src="';
        htmlInner += jsonClienteX.pasta + jsonClienteX.fotos[i].arquivo + jsonClienteX.extensao;
        htmlInner += '">\n<div class="selecionouEstaFoto" id="selecionouEstaFoto' + i + '" style="display:none"><span class="glyphicon glyphicon-ok"> </span></div>\n <div id="zoomEstaFoto" style="display:block"> <span class="glyphicon glyphicon-zoom-in"> </span></div >\n<button id="botao' + i + '" style="display:none" class="btn btn-success" onclick="alternarEscolhaDaFoto(' + i + ');">Selecionar</button></div>\n</li>';

        //<a href="#" data-toggle="modal" data-target="#myModal" onclick=zoomFotoLinha(i);>lupinha</a>

    }
    //var galeriaCliente = $("#grid");
    //galeriaCliente.html(htmlInner);
    document.getElementById("grid").innerHTML = htmlInner; //pra matar o requisito mas as linhas acima são mais bonitas
}

/*
para enviar msg de alerta mudando a tag <> de h2 quantidades fotos enviadas para <h1> voce precisa escolher ao menos uma foto
uso de seletores CSS - tag, id
*/
function enviarFotosSelecionadas() {
    //$(this).replaceWith($('<h5>' + this.innerHTML + '</h5>'));
}
//teste
