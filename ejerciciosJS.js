// Ejemplo para conseguir input del usuario
/*
  let a = window.prompt('dame un valor'); // Siempre regresa una cadena
*/
// Ejemplo para imprimir a consola
/*
  console.log('esto es un mensaje', 'este también');
*/
// Ejemplo para imprimir a documento
/*
  document.writeln('esto es un mensaje');
*/
// Imprime la fecha actual
function fecha() {
  var fecha = new Date();
  var year = fecha.getFullYear();
  var month = fecha.getMonth() + 1;
  var day = fecha.getDate()
  var completa = day + ' / ' + month + ' / ' + year;
  console.log(completa)
  document.getElementById('fechatext').innerHTML = completa;
}
// Obten el área de un triángulo. Pidele los 3 lados al usuario
function triangulo() {
  let a = window.prompt('Dame el valor lado 1'); // Siempre regresa una cadena
  let b = window.prompt('Dame el valor lado 2'); // Siempre regresa una cadena
  let c = window.prompt('Dame el valor lado 3'); // Siempre regresa una cadena
  a = parseFloat(a)
  b = parseFloat(b)
  c = parseFloat(c)
  var s = (a + b + c) / 2;
  var res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(res);
  document.getElementById('area').innerHTML = res;
}
// Voltea una string dada por el usuario
function voltea() {
  let str = window.prompt('Dime la palabra a voltear'); // Siempre regresa una cadena
  var rev = str.split('');
  var a = rev.reverse();
  var join = a.join('');
  document.getElementById('rev1').innerHTML = join;
}
// Voltea una string dada por el usuario sin usar el método de reverse
function reverse() {
  let str = window.prompt('Dime la palabra a voltear'); // Siempre regresa una cadena
  var strnew = [];
  var rev = str.split('');
  console.log("arreglo " + rev)
  for (var i = rev.length - 1; i > -1; i--) {
    strnew += rev[i];
  }
  document.getElementById('rev2').innerHTML = strnew;
}
// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C
*/
function convertir() {
  let num = window.prompt('Ingresa el numero a convertir'); // Siempre regresa una cadena
  let temp = window.prompt('Ingresa la temperatura inicial, solo C o F'); // Siempre regresa una cadena
  var res = 0;
  if (temp == 'C') {
    num = parseInt(num);
    var res = (num * 9 / 5) + 32;
    document.getElementById('temp').innerHTML = res;
  } else if (temp == 'F') {
    num = parseInt(num);
    var res1 = (num - 32) * 5 / 9;
    document.getElementById('temp').innerHTML = res1;
  } else {
    document.getElementById('temp').innerHTML = 'Temperatura no definida';
  }
}
// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
  si prop es el nombre,
  a  = {};
  a.prop = true
*/

function obj() {
  let prop = window.prompt('Ingresa el nombre de la propiedad');
  var myObj = new Object;
  myObj[prop] = true;
  document.getElementById('objeto').innerHTML = JSON.stringify(myObj);
}

// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo
function suma() {
  var tots = 0;
  var num = 0;
  while (num >= 0) {
    tots = num + tots;
    console.log(tots)
    let n = window.prompt('Ingresa numero a sumar');
    n = parseFloat(n);
    num = n;
  }
  document.getElementById('suma').innerHTML = tots;
}
// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
function may() {
  let str = window.prompt('Ingresa str')
  var ward = [];
  var joins = [];
  var arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    ward = arr[i].split('')
    mayu = ward[0].toUpperCase();
    ward.shift()
    ward.unshift(mayu);
    var ne = ward.join('');
    joins += ne + ' ';
  }
  document.getElementById('mayu').innerHTML = joins;
}
// Revisa si un número dado es múltiplo de 3 o de 7
function multiplo() {
  let num = window.prompt('Ingresa numero: ')
  num = parseInt(num);
  var res = 0;
  if (num % 3 == 0 && num % 7 == 0) {
    res = "Numero multiplo de 3 y de 7"
    document.getElementById('mult').innerHTML = res;
  } else if (num % 3 == 0) {
    res = "Numero multiplo de 3";
    document.getElementById('mult').innerHTML = res;
  } else if (num % 7 == 0) {
    res = "Numero multiplo de 7";
    document.getElementById('mult').innerHTML = res;
  } else {
    res = "No es multiplo";
    document.getElementById('mult').innerHTML = res;
  }
}
// Revisa cuantas veces se repite un caracter dado en una cadena dada
function repiteString() {
  let str = window.prompt('Ingrese su string: ');
  let car = window.prompt('Ingrese el caracter a buscar: ');
  var sum = 0;
  var a = str.indexOf(car, 0);
  while (a != -1) {
    sum++
    a = str.indexOf(car, a + 1)
  }
  document.getElementById('rep1').innerHTML = "Se repite: " + sum;
}
// Revisa cuantas veces se repite un valor dado en un arreglo
function repiteArray() {
  let arr = window.prompt('Ingrese su array: ');
  let val = window.prompt('Ingrese el valor a buscar: ');
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      sum++;
    } else {
      sum = sum;
    }
  }
  document.getElementById('rep2').innerHTML = sum;
}
// Divide un número de 3 dígitos en sus centenas, decenas y unidades
// 103 -> 1 centena, 0 decenas, 3 unidades
function tresDigitos() {
  let num = window.prompt('Ingrese su numero: ');
  num = num.toString(10).split('');
  var res = num[0] + " centenas, " + num[1] + " decenas, " + num[2] + " unidades "
  document.getElementById('digitos').innerHTML = res;
}
// Regresa todos los caracteres que no sean letras de una cadena
function caracteres() {
  let str = window.prompt('Ingrese su cadena: ');
  var caracteres = [];
  var arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    if (/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/.test(arr[i])) {
      caracteres = caracteres
    } else {
      caracteres += arr[i]
    }
  }
  document.getElementById('car').innerHTML = caracteres;
}
// Haz una función que lanza un error con el mensaje dado por el usuario
function error() {
  let mensaje = window.prompt('Ingrese su mensaje de error: ');
  throw new Error(mensaje);
}
// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
function errorImp() {
  try {
    error()
  } catch (Error) {
    document.getElementById('err').innerHTML = Error;
    document.getElementById('errStack').innerHTML = Error.stack;
  }
}
// Suma los contenidos de un arreglo de números
function sumaNumeros() {
  var tots = 0;
  var num = 0;
  while (/\d/.test(num)) {
    tots = num + tots;
    console.log(tots)
    let n = window.prompt('Ingresa numero a sumar');
    n = parseFloat(n);
    num = n;
  }
  document.getElementById('sumN').innerHTML = tots;
}
// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
function cuadrado() {
  let arr = window.prompt('Ingresa el arreglo a modificar: ');
  var cuad = [];
  for (let i = 0; i < arr.length; i++) {
    if (/\d/.test(arr[i])) {
      cuad.push(Math.pow(parseFloat(arr[i]), 2));
    }
  }
  document.getElementById('resultado').innerHTML = cuad;
}
// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
function tipoAngulo() {
  let ang = parseInt(window.prompt('Ingresa el angulo: '));
  var res = '';
  if (ang >= 0 && ang < 90) {
    res = "Agudo";
  } else if (ang == 90) {
    res = "Recto";
  } else if (ang > 90 && ang < 180) {
    res = "Obtuso";
  } else if (ang == 180) {
    res = "Llano";
  } else {
    res = "Angulo no valido";
  }
  document.getElementById('tipo').innerHTML = res;
}
// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
  function noRepeat() {
    let arr = window.prompt('Ingresa el arreglo: ');
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
        console.log(newArr);
      }
    }
    document.getElementById('repeat').innerHTML = newArr;
  }

// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
function noRepeatEasy() {
  var arr = [];
  while (arr.length != 5) {
    let val = parseInt(window.prompt('Ingresa el valor: '));
    arr.push(val)
  }
  let sinRepetidos = [...new Set(arr)];
  document.getElementById('noRep').innerHTML = sinRepetidos;
}
// Convierte un número binario dado por el usuario a decimal
function aDecimal() {
  let num = window.prompt('Ingresa el numero binario: ');
  var raiz = 0;
  var res = 0;
  for (i = num.length - 1; i > -1; i--) {
    var op = num[i] * Math.pow(2, raiz)
    raiz++
    res = op + res
  }
  document.getElementById('decimal').innerHTML = res;
}
//Mas facil
function aDecimalMas() {
  let num = window.prompt('Ingresa el numero binario: ');
  document.getElementById('deci').innerHTML = parseInt(num, 2);
}
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
function aBinario() {
  let num = parseFloat(window.prompt('Ingresa el numero decimal: '));
  var div = Math.floor(num / 2);
  var resto = Math.floor(num % 2);
  var bin = [];
  bin.unshift(resto)
  while (!(div == 0 || div == 1)) {
    resto = div % 2;
    div = Math.floor(div / 2);
    bin.unshift(resto)
  }
  resto = div % 2;
  div = Math.floor(div / 2);
  bin.unshift(resto)
  bin.unshift(div)
  document.getElementById('binario').innerHTML = bin.join('');
}

function aBinarioMas() {
  let num = parseFloat(window.prompt('Ingresa el numero decimal: '));
  document.getElementById('bin').innerHTML = num.toString(2)
  document.getElementById('oct').innerHTML = num.toString(8)
  document.getElementById('hexa').innerHTML = num.toString(16)
}
// Regresa la cantidad de valores que comparten dos arreglos diferentes
function share() {
  var arr1 = [];
  var arr2 = [];
  var count= 0;;
  while (arr1.length != 5) {
    let val = parseInt(window.prompt('Ingresa un valor del 1er arreglo: '));
    arr1.push(val)
  }
  while (arr2.length != 5) {
    let val = parseInt(window.prompt('Ingresa un valor del 2er arreglo: '));
    arr2.push(val)
  }
  for(i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i])){
      count++
    }
  }
  document.getElementById('shareNow').innerHTML = count
}
// Valida que una cadena dada no tenga espacios en blanco
function noSpaces() {
  let str = window.prompt('Ingresa el arreglo: ');
  if (str.split(' ').length == 1) {
    document.getElementById('respuesta').innerHTML = "La cadena: " + str + "  NO tiene espacios";
  }
  document.getElementById('respuesta').innerHTML = "La cadena: " + str + "  SI tiene espacios";
}
//Otra opcion
/*
function no(){
  let str = window.prompt('Ingresa el arreglo: ');
  if(/^\s+|\s+$/.test(str)){
    document.getElementById('respuesta').innerHTML = "La cadena: " + str + "  SI tiene espacios";
  }
  document.getElementById('respuesta').innerHTML = "La cadena: " + str + "  NO tiene espacios";
}

// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
function scrabble() {
  let str = window.prompt('Ingresa la palabra en mayusculas: ');
  var puntaje = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == 'E' || str[i] == 'A' || str[i] == 'I' || str[i] == 'O' || str[i] == 'N' || str[i] == 'R' || str[i] == 'T' || str[i] == 'L' || str[i] == 'S' || str[i] == 'U') {
      puntaje = puntaje + 1;
      console.log('p1 ' + puntaje)
    } else if (str[i] == 'D' || str[i] == 'G') {
      puntaje = puntaje + 2;
      console.log('p2 ' + puntaje)
    } else if (str[i] == 'B' || str[i] == 'C' || str[i] == 'M' || str[i] == 'P') {
      puntaje = puntaje + 3;
      console.log('p3 ' + puntaje)
    } else if (str[i] == 'F' || str[i] == 'H' || str[i] == 'V' || str[i] == 'W' || str[i] == 'Y') {
      puntaje = puntaje + 4;
      console.log('p4 ' + puntaje)
    } else if (str[i] == 'K') {
      puntaje = puntaje + 5;
      console.log('p5 ' + puntaje)
    } else if (str[i] == 'J' || str[i] == 'X') {
      puntaje = puntaje + 8;
      console.log('p6 ' + puntaje)
    } else if (str[i] == 'Q' || str[i] == 'Z') {
      puntaje = puntaje + 10;
      console.log('p7 ' + puntaje)
    } else {
      puntaje = puntaje;
      console.log('p8 ' + puntaje)
    }
  }
  document.getElementById('points').innerHTML = puntaje;
}
  // Determina si una cadena dada por el usuario es un acrónimo

  // Implementa una lista ligada

  // Implementa una lista doblemente ligada
// Obten el Máximo común divisor de dos números dados
function maxComun(){
  let num1 = parseInt(window.prompt('Ingresa el primer numero (mayor): '));
  let num2 = parseInt(window.prompt('Ingresa el segundo numero (menor): '));
  var res=0;
  var div=0;
  while (num1 !=0 && num2 !=0){
    res = num1 % num2 
    div = num1/num2
    num1 = num2;
    num2 = res;
  }
  if( num1 == 0){
    document.getElementById('mcd').innerHTML = num2; 
  }
  document.getElementById('mcd').innerHTML = num1;
}