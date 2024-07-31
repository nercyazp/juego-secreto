let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo=10; // numero maximo de intentos


function generarNumeroSecreto() {
    // +1 para ir de 1 a 10
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //si el número generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // recursividad, la funcion se llama asi misma para volver a generar el num
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario==numeroSecreto){
        asignarTextoElemento('p', `Acertaste al número en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el número secreto es menor');
        }else{
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//esta funcion limpita la caja acada vez que el usuario haga un intento en el juego
function limpiarCaja(){
document.querySelector('#valorUsuario').value=''; //cuando se escribe un Query selector se acompaña siempre el Id del input con un # antes
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un numero 1 al ${numeroMaximo}`);
    //generar nuevamente el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    //incializar el número de intentos
    intentos=1;
     // Deshabilitar boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //inicar msj de cintervalo de numeros 
    condicionesIniciales();
    
}

condicionesIniciales();