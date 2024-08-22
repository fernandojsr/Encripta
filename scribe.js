function btnEncriptar() {
    const textArea = document.querySelector(".text-area");
    const mensajeArea = document.querySelector(".mensaje-area");
    const texto = textArea.value.trim(); 
    document.getElementById(`btnCopiar`).style.display = `inline-block`;

    if (texto === "") {
        mensajeArea.style.backgroundImage = "none";
        mensajeArea.value = "Ingresa el texto que desees encriptar o desencriptar.";
        return; 
    }

    const textoEncriptado = encriptar(texto);
    mensajeArea.value = textoEncriptado;
    textArea.value = "";
    mensajeArea.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnCopiar() {
    const mensajeArea = document.querySelector(".mensaje-area");
    const texto = mensajeArea.value;

    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}

function btnDesencriptar() {
    const textArea = document.querySelector(".text-area");
    const mensajeArea = document.querySelector(".mensaje-area");
    const texto = textArea.value.trim();

    if (texto === "") {
        mensajeArea.style.backgroundImage = "none";
        mensajeArea.value = "Texto a desencriptar no encontrado";
        return;
    }

    const textoDesencriptado = desencriptar(texto);
    mensajeArea.value = textoDesencriptado;
    textArea.value = "";
    mensajeArea.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}
