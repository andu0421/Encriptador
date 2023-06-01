const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnencriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;//Envia el resultado
    textArea.value = "";//Limpiar el texto
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizcodigo);//mostar tabald e arrays
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i<matrizcodigo.length;i ++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);//sustituye las palabras
        }
    }
    return stringEncriptada;
}

function btDesenencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;//Envia el resultado
    textArea.value = "";//Limpiar el texto 
}

function desencriptar(stringDesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizcodigo);//mostar tabald e arrays
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i<matrizcodigo.length;i ++){
        if(stringDesencriptada.includes(matrizcodigo[i][1 ])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);//sustituye las palabras
        }
    }
    return stringDesencriptada;
}
function pegarTexto(){
    navigator.clipboard.readText().then((text) => {
      textArea.value = text;
    });
  }
function copiarTexto(){
    mensaje.select();
    document.execCommand("copy");
  }
