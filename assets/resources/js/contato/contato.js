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
    }
  });
    
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

function enviadoContato() {
  document.getElementById("contact-form").innerHTML = ("REGISTROS ENVIADOS");
}

window.onload = function() {
  var input_name = document.forms[0].name;
  var input_email = document.forms[0].email;
  var input_msg = document.forms[0].message;
  
  input_name.addEventListener('blur', function() {
    if (input_name.value == "")
      input_name.value = "Você esqueceu de preencher-me";
  });
  
  input_email.addEventListener('blur', function() {
    if (input_email.value == "")
      input_email.value = "Você esqueceu de preencher-me";
  });
  
   input_msg.addEventListener('blur', function() {
    if (input_msg.value == "")
      input_msg.value = "Você esqueceu de preencher-me";
  });
  
  input_name.addEventListener('focus', function() {
    input_name.style.color = '#fff';
    input_name.style.background = '#0080ff';
    
    input_email.style.color = '#000';
    input_email.style.background = '#fff';
    
    input_msg.style.color = '#000';
    input_msg.style.background = '#fff';
  });
  
  input_email.addEventListener('focus', function() {
    input_name.style.color = '#000';
    input_name.style.background = '#fff';
    
    input_email.style.color = '#fff';
    input_email.style.background = '#0080ff';
    
    input_msg.style.color = '#000';
    input_msg.style.background = '#fff';
  });
  
  input_msg.addEventListener('focus', function() {
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

