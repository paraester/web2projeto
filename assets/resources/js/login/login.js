var tentativas = 3; // contar o número de tentativas.
function loginCliente() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("entrou aqui" + email + " e " + password);
    if (email == "teste@gmail.com" && password == "projeto$$") {
        naoLogou(23);
        console.log("entrou aqui");
        alert("Obrigada por fazer login você será redirecionado (a).");
        window.location = "cliente.html";
        return false;
    } else {
        tentativas--; // Decrementing by one.
        alert("Voce tem:  " + tentativas + " tentativas;");
        if (tentativas == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
var naoLogou = function (i) {
    var logou;
    if (i == 23) {
        sessionStorage.setItem("logou", "1267");
    }
}