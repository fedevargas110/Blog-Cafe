//Formas de seleccionar elementos: querySelector, querySelectorAll, getElementById

// QuerySelector lo que tiene es que te devuelve maximo 1 elemento o null

const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent= 'Programando en Java Script';
console.log(heading);

//querySelectorAll lo que tine es que te devuelve todos los elementos que concuerden con lo que pedimos.

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

//getElementById sirve para para seleccionar su elemento a traves del id
const heding2 = document.getElementById('nombre');
console.log(heding2);


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