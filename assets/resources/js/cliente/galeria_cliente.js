//quando mouseover na foto selecionar o botão seleciona e a lupinha devem aparecer
function showBotao(i) {

    /*    var div = document.getElementById("botao" + i);
        var verRetirar = document.getElementById("retirar" + i);
        // se conteúdo está escondido, mostra e troca o valor do botão selecionar para: esconde
        if (div.style.display === "none" && verRetirar.style.display === "none") {
            div.value = "esconde";
            div.style.display = "block";
        }
    */
    var div = $("#botao" + i); //vamos usar abaixo seletores CSS por id
    var verRetirar = $("#retirar" + i);
    var zoomfoto = $("#zoomEstaFoto" + i);
    zoomfoto.show();
    if (div.is(":visible") || verRetirar.is(":visible")) { //se o botão retirar estiver visivel nao faz nada
        return;
    } else {
        div.css('display', 'block'); //uso de seletores CSS por 
        div.css('color', 'white');
        div.show();
    }
}

function escondeBotaoSelecionar(i) {
    var div = document.getElementById("botao" + i);

    if (div.style.display === "block") {
        div.style.display = "none";
    }
    var zoomfoto = $("#zoomEstaFoto" + i);
    zoomfoto.hide();
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
    // objeto global do cliente da base de dados na variavel jsonClienteX
    var htmlZoomEstaFoto = "";
    htmlZoomEstaFoto += '<img src="';
    htmlZoomEstaFoto += jsonClienteX.pasta + jsonClienteX.fotos[i].arquivo + jsonClienteX.extensao;
    htmlZoomEstaFoto += '"><label id="fotonome' + i + '" class="control-label col-sm-10">';
    htmlZoomEstaFoto += jsonClienteX.fotos[i].arquivo + jsonClienteX.extensao; //nome do arquivo
    htmlZoomEstaFoto += '</label>';

    var zoomFotos = $("#zoomdafotoselecionada"); //colocando no html
    zoomFotos.html(htmlZoomEstaFoto);
    console.log(htmlZoomEstaFoto);
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
    //salvando cada as fotos selecionada
    var chaveCliente = sessionStorage.getItem("logou");

    localStorage.setItem(chaveCliente, JSON.stringify(jsonClienteX));
    // console.log("foi salvo " + div.html());
}

function exibirFotosAoIniciar() {
    var logou = verSeLogado();
    if (!logou) {
        return;
    }


    // objeto global do cliente da base de dados na variavel jsonClienteX
    var htmlInner = "";
    for (var i = 0; i < jsonClienteX.fotos.length; i++) {
        htmlInner += '<li>\n<div class = "caption img-wrapper" onmouseover="showBotao(' + i + ');" onmouseout="escondeBotaoSelecionar(' + i + ');" style="position:relative;">\n<img src="';
        htmlInner += jsonClienteX.pasta + jsonClienteX.fotos[i].arquivo + jsonClienteX.extensao;
        htmlInner += '">\n<div class="selecionouEstaFoto" id="selecionouEstaFoto' + i + '" style="display:none"><span class="glyphicon glyphicon-ok"> </span></div>\n <div class="zoomEstaFoto" id="zoomEstaFoto' + i + '" style="display:none"><a href="#" data-toggle="modal" data-target="#myModal" onclick=zoomFotoLinha(' + i + '); <span class="glyphicon glyphicon-zoom-in"> </span></a></div >\n<button id="botao' + i + '" style="display:none" class="btn btn-success" onclick="alternarEscolhaDaFoto(' + i + ');">Selecionar</button></div>\n</li>';

        //<a href="#" data-toggle="modal" data-target="#myModal" onclick=zoomFotoLinha(i);>lupinha</a>

    }
    //var galeriaCliente = $("#grid");
    //galeriaCliente.html(htmlInner);
    document.getElementById("grid").innerHTML = htmlInner; //pra matar o requisito mas as linhas acima são mais bonita
    exibirComFotosMarcadasAnteriormente();
}

function exibirComFotosMarcadasAnteriormente() {
    //pra carregar com eventuais fotos selecionadass anteriormente
    var chaveCliente = sessionStorage.getItem("logou");
    if (!localStorage.getItem(chaveCliente)) {
        //não existe nada no localstorage deste cliente
        return;
    }
    var jsonClienteXTmp = JSON.parse(localStorage.getItem(chaveCliente));
    for (var i = 0; i < jsonClienteXTmp.fotos.length; i++) {
        if (jsonClienteXTmp.fotos[i].escolhido == true) {
            console.log("foto" + i + "estava marcada no localstorage");
            var div = $("#botao" + i); //uso de seletores CSS por id
            div.html("Retirar");
            jsonClienteX.fotos[i].escolhido = true;
            div.removeClass('btn-success').addClass('btn-warning');
            $("#selecionouEstaFoto" + i).toggle();
        }
    }
    console.log("exibirComFotosMarcadasAnteriormente" + i + "fim");
}
/*
para enviar msg de alerta mudando a tag <> de h2 quantidades fotos enviadas para <h1> voce precisa escolher ao menos uma foto
uso de seletores CSS - tag, id
*/
function enviarFotosSelecionadas() {
    var confirma = confirm("Confirmar o envio das fotos?!");
    if (confirma == true) {
        var email = prompt("Por favor coloque um email para que possamos lhe comunicar sobre a entrega: ");
        //$(this).replaceWith($('<h5>' + this.innerHTML + '</h5>'));
        var fotosenviadas = { //comecamos armazenando email do cliente
            email: email
        };
        for (var i = 0; i < jsonClienteX.fotos.length; i++) {
            if (jsonClienteX.fotos[i].escolhido == true) {
                fotosenviadas[i] = jsonClienteX.fotos[i].arquivo; //armazenando todos os nomes dos arquivos
                console.log("enviando fotos" + i + "estava marcada no localstorage");
            }
        }
        var chaveParaAdmin = "FotosSalvasDe" + sessionStorage.getItem("logou"); //id do cliente sessionStorage.getItem("logou")
        //for (chave in localStorage){
        //if (chave.indexOf("FotosSalvasDe") >= 0));//esta é a chave de um cliente que enviou fotos
        //}

        localStorage.setItem(chaveParaAdmin, JSON.stringify(fotosenviadas));

        //apagar do localstorage do cliente ou apenas após 5 dias
        localStorage.removeItem(sessionStorage.getItem("logou"));

        alert("Suas fotos foram enviadas Você será redirecionado para o inicio");
        deslogar();

    } else {
        return;
    }
}
//teste
function verSeLogado() {
    var estaLogado = sessionStorage.getItem('logou');
    //localStorage.setItem("logou", "231");
    console.log("esta logado " + estaLogado);
    if (estaLogado == '1267') {
        return true;
    } else {
        alert("Você precisa fazer o login.");
        // deslogar(); //pra este caso limpar Pra dar certo qdo logar 
        window.location = "index.html";
        return false;
    }
    return false;
}

function deslogar() {
    sessionStorage.removeItem("logou");
    window.location = "index.html";
}