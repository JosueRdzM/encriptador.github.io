const minusculas = "abcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyz"; // 27 elementos con ñ
const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; // 27 elementos con ñ
const numeros = "01234567890123456789"; // 10 elementos del 0 al 9
const espacio = " ";
const especiales = ".,_-}´+{[*]`~^#$%&/()='¡¿?:;áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ"

let minusculasArray = [];
let mayusculasArray = [];
let numerosArray = [];
let minusculasArrayDes = [];
let mayusculasArrayDes = [];
let numerosArrayDes = [];
let especialesArray = [];

for (let index = 0; index < minusculas.length; index++) {
    minusculasArray.push(minusculas[index]);
    mayusculasArray.push(mayusculas[index]);
    minusculasArrayDes.push(minusculas[index]);
    mayusculasArrayDes.push(mayusculas[index]);
}

for (let index = 0; index < especiales.length; index++){
    especialesArray.push(especiales[index]);
}

for (let index = 0; index < numeros.length; index++) {
    numerosArray.push(numeros[index]);
    numerosArrayDes.push(numeros[index]);
}

const entrada = document.querySelector(".entrada");
const rango = document.querySelector("#range");
const nivel = document.querySelector("#nivel");
const btn = document.querySelector("#btn");
const entrega = document.querySelector("#entrega");
const copiar = document.querySelector("#compartir");
var copiado;

entrada.addEventListener('input', ()=>{
    
})

rango.addEventListener('input', ()=>{
    nivel.innerHTML = ("Nivel " + rango.value);
})

btn.addEventListener('click', ()=>{

    let encriptar = parseInt(rango.value);
    let salida = "";
    
    for (let index = 0; index < entrada.value.length; index++) {

        if (entrada.value[index] === " ") {
            salida += " ";
        }

        for (let j = 0; j < 27; j++) {
            if (entrada.value[index] === minusculasArray[j]) {
                salida += (minusculasArray[j+encriptar]);
            } 
        }
        
        for (let j = 0; j < 27; j++) {
            if (entrada.value[index] === mayusculasArray[j]) {
                salida += (mayusculasArray[j+encriptar]);
            } 
        }

        for (let j = 0; j < 9; j++) {
            if (entrada.value[index] === numerosArray[j]) {
                salida += (numerosArray[j+encriptar]);
            } 
        }
        
        
    }
    
    entrega.value = salida;
    copiado = salida;
})

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copiado)
    .then(()=>alert("Se guardo: '" + copiado + "' exitosamente en el porta papeles"))
    
    
})