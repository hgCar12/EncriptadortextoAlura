const texto_nuevo = document.querySelector ("#texto-nuevo");
const texto_encriptado = document.querySelector ("#texto-encriptado");
const botonEncripta = document.getElementById("encripta");
const botonDesencripta = document.getElementById("desencriptar");

const matriz_code =
[
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],  // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];

function botonEncriptar() 
{
    const texto = encriptar(texto_nuevo.value);
    texto_encriptado.value = texto;
    texto_nuevo.value = "";
}

function encriptar(textoEncriptado)
{
    //Recorre comparando el texto inicial con nuestra matriz
    for(let i = 0; i < matriz_code.length; i++) 
    {
        if(textoEncriptado.includes(matriz_code[i][0]))
        {
            //sustitulle las letras vocales por las de la matriz encriptada
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return textoEncriptado
}

const matriz_dos =
[
    ["ai", "a"], // indice 0
    ["enter", "e"],  // indice 1
    ["imes", "i"],  // indice 2
    ["ober", "o"],  // indice 3
    ["ufat", "u"],  // indice 4
];

function botonDesncriptar() 
{
    const textodos = desencriptar(texto_nuevo.value);
    texto_encriptado.value = textodos;
    texto_nuevo.value = "";
}

function desencriptar(textoDesencriptado)
{
    for(let i = 0; i < matriz_dos.length; i++) {
        if(textoDesencriptado.includes(matriz_dos[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_dos[i][0],
                matriz_dos[i][1]
            );
        }
    }
    return textoDesencriptado
}

function botonCopiar() 
{
    // Recibe el texto encritado
    var copyText = document.getElementById("texto-encriptado");
    
    // Selecciona dentro del text area
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Esto es para dispositivos moviles
  
     // Copia el texto dentro del text area
    navigator.clipboard.writeText(copyText.value);
    texto_encriptado.value = "";
}

function mostrarcopiar() 
{
    document.getElementById("copiar").style.display = "inline-block";
}

function ocultarboton() 
{
    document.getElementById("copiar").style.display = "none";
}

function ocultar() 
{
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("frase").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
}

function mostrar() 
{
    document.getElementById("muñeco").style.display = "inline-block";
    document.getElementById("frase").style.display = "inline-block";
    document.getElementById("mensaje").style.display = "inline-block";
}

function mostrarExitoEncriptar() 
{
    document.getElementById("exito-enc").style.display = "inline";
}

function mostrarExitoDesencriptar() 
{
    document.getElementById("exito-des").style.display = "inline-block";
}

function ocultarTexto() 
{
    document.getElementById("exito-enc").style.display = "none";
    document.getElementById("exito-des").style.display = "none";
}

texto_nuevo.addEventListener("input", function(event) 
{
    if (texto_nuevo.value.trim() !== "") 
    {
        botonEncripta.removeAttribute("disabled");
        botonDesencripta.removeAttribute("disabled");
    }
});

function desabilitarBotones()
{
    document.getElementById("encripta").setAttribute("disabled", true);
    document.getElementById("desencriptar").setAttribute("disabled", true);
}
