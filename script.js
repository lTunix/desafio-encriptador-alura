function encriptar() {
    let texto = document.getElementById("textoEncriptador").value;

    if(texto == ""){
        alert("Por favor, ingresa un texto a encriptar/desencriptar")
        return
    }

    const criterios = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i]

        if (criterios.hasOwnProperty(caracter)) {
            textoEncriptado += criterios[caracter];
        } else {
            textoEncriptado += texto[i];
        }
    }

    document.getElementById("noMessage").style.display = "none"
    document.getElementById("resultado-ok").style.display = "block"
    document.getElementById("resultadoEncriptado").value = textoEncriptado
}

function desencriptar(){
    let textoEncriptado = document.getElementById("textoEncriptador").value;

    if(textoEncriptado == ""){
        alert("Por favor, ingresa un texto a encriptar/desencriptar")
        return
    }

    const criterios = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    let textoDesencriptado = textoEncriptado;

    for (let fragmento in criterios) {
        textoDesencriptado = textoDesencriptado.split(fragmento).join(criterios[fragmento]);
    }

    document.getElementById("noMessage").style.display = "none"
    document.getElementById("resultado-ok").style.display = "block"
    document.getElementById("resultadoEncriptado").value = textoDesencriptado
}

function copiar(){
    var textoCopiado = document.getElementById("resultadoEncriptado");
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado: " + textoCopiado.value);
}