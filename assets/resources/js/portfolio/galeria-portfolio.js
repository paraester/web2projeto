var jsonClienteX = {
    pasta: "assets/resources/img/clients/cliente/",
    extensao: ".jpg",
    fotos: [
        {
            arquivo: '19',
            escolhido: false
        },
        {
            arquivo: '18',
            escolhido: false
        },
        {
            arquivo: '17',
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
            arquivo: '3',
            escolhido: false
        },
        {
            arquivo: '20',
            escolhido: false
        },
        {
            arquivo: '1',
            escolhido: false
        },
	],
}

function exibirFotosAoIniciar() {
    // objeto global do cliente da base de dados na variavel jsonClienteX

    var htmlInner = "";
    for (var i = 0; i < jsonClienteX.fotos.length; i++) {
        htmlInner += '<li>\n<div class = "caption img-wrapper" style="position:relative;">\n<img src="';
        htmlInner += jsonClienteX.pasta + jsonClienteX.fotos[i].arquivo + jsonClienteX.extensao;
        htmlInner += '"></li>';
    }
    document.getElementById("grid").innerHTML = htmlInner;
}
