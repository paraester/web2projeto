function mostraFotosDoClienteSelecionado() {
    console.log("mostrar fotos do cliente que foi selecionado mostraFotosDoClienteSelecionado");
    var chaveDoCliente = $("select option:selected").text();
    var x = document.getElementById('resultadosBusca');
    var fotos = JSON.parse(localStorage.getItem('FotosSalvasDe' + chaveDoCliente));
    var lista = "<br>Cód cliente: " + chaveDoCliente + espaco + " Email: " + fotos.email + "<hr>";
    var qtdeFotos = parseInt(fotos.qtdeFotos, 10);

    var coluna = 0;
    lista += "<ul><li>";
    for (chave in fotos) {
        if (chave == "email" || chave == "qtdeFotos") {
            continue;
        }

        coluna++;
        if (coluna == 8) {
            lista += chave + ".jpg </li></ul><lu><li>";
            coluna = 0;
        } else {
            lista += chave + ".jpg" + espaco;
        }

    }
    lista += "</li></ul><hr>" + "Quantidade de fotos: " + qtdeFotos + "<hr>";
    x.innerHTML = lista;

}

function verFotosSelecionadas() {
    var variaveleSelect = $('select');
    for (chave in localStorage) {
        if (chave.indexOf("FotosSalvasDe") >= 0) { //esta é a chave de um cliente que enviou fotos
            console.log("dentro do if");
            var chaveDoCliente = chave.replace("FotosSalvasDe", "");
            console.log("dentro do if chaveDoCliente" + chaveDoCliente);
            //botar no select
            variaveleSelect.append('<option val="' + chaveDoCliente + '">' + chaveDoCliente + '</option>');
        }
    }
    console.log("quantidade de clientes");
    var x = document.getElementsByTagName('select')[0].length;
    document.getElementsByName("selecionandofotos")[0].innerHTML = "Quantide de clientes: " + x;
}
//teste
function verSeLogado() {
    var estaLogado = sessionStorage.getItem('logouAdmin');
    //localStorage.setItem("logou", "231");
    console.log("esta logado " + estaLogado);
    if (estaLogado == '007700') {
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
    alert("Bye Bye");
    sessionStorage.removeItem("logouAdmin");
    window.location = "index.html";
}
var espaco = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"