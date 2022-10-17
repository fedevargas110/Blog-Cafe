//Formas de seleccionar elementos: querySelector, querySelectorAll, getElementById

// QuerySelector lo que tiene es que te devuelve maximo 1 elemento o null

const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent= 'Programando en Java Script';
console.log(heading);

//querySelectorAll lo que tine es que te devuelve todos los elementos que concuerden con lo que pedimos.

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

//getElementById sirve para para seleccionar su elemento a traves del id
//      const heding2 = document.getElementById('nombre');
//      console.log(heding2);


//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

// agregar href
nuevoEnlace.href = 'https://www.google.com.ar/';

// agregar texto
nuevoEnlace.textContent = 'Pepito';

// agregar class
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

//document = window

//Eventos

window.addEventListener('load', function(){ // load espera a que el JS y los archivos que dependen del HTML esten listos.
    console.log(1);
});

console.log(2)

window.addEventListener('DOMContentLoaded', function(){// espera al HTML pero no a CSS e Imagenes.
    console.log(3);
});

document.onscroll = function(){
    console.log('scrolling....')
}

//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(){
//    console.log('ENVIANDO FORMULARIO..')
//})


//preventDefault() es para prevenir que recargue la pagina y se pueden validar formularios entre otras cosas.
// siempre que haya un addEventListener, onscroll, etc se le puede poner dentro de los parentesis de la function (e) de Evento 
// y acceder a diferentes propiedades de ese elemento o eveno con el cual interaccionamos

//Eventos de los Inputs y Textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerT);
email.addEventListener('input', leerT);
mensaje.addEventListener('input', leerT);
//El evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    //Validar Form
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' ||mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return; // Corta la ejecucion de un codigo
    }else{
        mostrarMensajeEnviado('Succefuly');
    }

    //Enviar Form

    console.log('Enviando Form');
});


//Para no repetir codigo se pueden crear funciones antes que la llamameos a la hora de utilizarlas.
function leerT(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos)
};

// Alerta de campos incompletos
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);
    //Desaparezca la alerta despues de 5 seg
    setTimeout(() => {
        error.remove();
    }, 5000);
}

//Alerta de mensaje enviado correctamente

function mostrarMensajeEnviado(mensaje2){
    const enviado = document.createElement('P'); // que tipo de elemento estoy creando
    enviado.textContent = mensaje2; // lo que va a contener
    enviado.classList.add('enviado'); // creando la clase

    formulario.appendChild(enviado);
     //Desaparezca la alerta despues de 5 seg
     setTimeout(() => {
        enviado.remove();
    }, 5000);
}






