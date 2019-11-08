//Esta función convierte minúsculas a mayúsculas cuando se presiona el botón de encripar
function changeToUppercase(field) {
  field.value = field.value.toUpperCase();
}

//Esta función muestra el nombre del usuario cuando pasa la sección de encriptado, y esconde la sección de ingresar usuario.
function showEncryptionBlock() {
  let sayGreeting, collectiveName;
   collectiveName = document.getElementById("collectiveName").value;
   sayGreeting = document.getElementById("greeting");
   sayGreeting.innerHTML = "Hola " + collectiveName + ". " + "Por favor, escribe tu mensaje.";
   document.getElementById("encryptionBlock").classList.remove("hide");
   document.getElementById("userName").classList.add("hide");
 }

//Esta función muestra el mensaje encriptado
function encryptText() {
  let number = encryptionNumberValidation();
  let text = encryptionTextValidation();
  if (number && text) {
   let encodedMessage = cipher.encode(number, text)
    document.getElementById('encodedText').value = encodedMessage;
   //debugger
  } else {
   return false;
  }
}

//Esta función valida la existencia del offset (necesario para codificar), de lo contrario, marca errror.
function encryptionNumberValidation() {
  let number = parseInt(document.getElementById('encryptionNumber').value);
  if ( number > 0 && number < 51 ) {
   return number;
  }  else {
   alert("Cifrado inválido.");
   return null;
  }
}

//Esta función se asegura de que exista un texto para encriptar.
function encryptionTextValidation() {
  let text = document.getElementById('encryptionText').value;
  if ( text && text != "") {
   return text;
  } else {
   alert("Escribe tu mensaje.");
   return null;
  }
}

function decryptionTextValidation() {
  let text = document.getElementById('encodedText').value;
  if ( text && text != "") {
   return text;
  } else {
   alert("Escribe tu mensaje.");
   return null;
  }
}

function decryptText() {
  let number = encryptionNumberValidation();
  let text = decryptionTextValidation();
  //debugger
  if (number && text) {
   let decodedMessage = cipher.decode(number, text)
   document.getElementById('encryptionText').value = decodedMessage;
   //debugger
  } else {
   return false;
  }
}




 // function userNameValidation() {
 //   let name = document.getElementById('wrotenName').value;
 //   if (name && name != "") {
 //     return name;
 //   } else {
 //     alert("Por favor, escribe tu nombre.");
 //     return null;
 //   }
 // }

//Esta función borra el texto en las cajas superior e inferior.
function reset() {
  document.getElementById("encryptionText").value = "";
  document.getElementById("encodedText").value = "";
}
