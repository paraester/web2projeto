var tentativas = 3; // contar o número de tentativas.
function loginCliente() {
    //var email = document.getElementById("email").value;
    var email = window.email.value;
    var password = document.getElementById("password").value;
    console.log("entrou aqui" + email + " e " + password);
    if (email == "teste@gmail.com" && password == "projeto$$") {
        naoLogou(23);
        console.log("entrou aqui");
        alert("Obrigada por fazer login você será redirecionado (a).");
        window.location = "cliente.html";
        return false;
    } else if (email == "admin@gmail.com" && password == "projeto") {
        naoLogou(007);
        console.log("entrou aqui admin");
        alert("Admin você será redirecionado (a).");
        window.location = "admin.html";
        return false;
    } else {
        tentativas--;
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
    if (i == 007) {
        sessionStorage.setItem("logouAdmin", "007700");
    }
}