// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad en años de perro (edad x 7)
function calculateDogAge(){
  let ageD = parseInt(window.prompt('Ingresa la edad humana del perro: '));
  if(ageD>0){
  document.getElementById('dogAge').innerHTML = ageD*7; 
  }
  document.getElementById('dogAge').innerHTML = "Edad no valida"; 
}
//Sin html
function calculateDogAge2(num){
  if(num>0){
    return num*7; 
  }
  return "Edad no valida"
}
// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
  // El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)
function getCandySupply(){
    let age = parseInt(window.prompt('Ingresa tu edad: '));
    let amount = parseInt(window.prompt('Ingresa la cantidad de dulces que comes por día: '));
    const esperanzaVida= 77; 
    document.getElementById('candyAm').innerHTML = (esperanzaVida-age)*amount*365;  
}
//Sin html
function getCandySupply2(age, amount){
  const esperanzaVida= 77; 
  return (esperanzaVida-age)*amount*365;  
}

// Crea una función que permita encadenar llamadas
  // a().a().a() ... etc
function encadenar(){
  var arr=[1,2,3,4,5]
  arr.pop();
  arr = arr
  return arr
}
// Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse
let formal = () => { return "Buenos días"}
let casual = () => { return "hola!"}

function saludo(tipo,formal,casual){
  if( tipo === 'formal'){
    formal();
  }else if( tipo === 'casual'){
    casual();
  }else{
    return "tipo no definido"
  }
} 


// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map
function cuadradoarr(arr) {
  var cuad = [];
  for (let i = 0; i < arr.length; i++) {
    if (/\d/.test(arr[i])) {
      cuad.push(Math.pow(parseFloat(arr[i]), 2));
    }
  }
 return cuad;
}
const cuadradoforeach = (arr) => {
  let newArr=[];
  arr.forEach(v = (el) => {
    let raiz=Math.pow(el,2);
    newArr.push(raiz);
  })
  return newArr
}
// Explica cual es la salida de las siguientes funciones y porqué:
/*
var a = 12;
(function() {
  alert(a);
})();
*/
    //La salida es una pantalla de alerta que dice "12", porque se definio var a antes de la funcion y se pasa a la que se lee dentro de la funcion
/*
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
*/
    //La salida es una pantalla de alerta que dice "12" porque se definio var a dentro de la afuncion y se pasa a la que se lee en alert ( en su alcance)
/*
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();
*/
  //La salida es una pantalla de alerta que dice "12" porque se definio var a dentro de la funcion y se pasa a la que se lee en alert ( en su alcance)

/*
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
*/
    //La salida es una pantalla de alerta que dice "10" porque el alcance de var 12 tiene un scoop local a su function (y) y no es mandada a llamar despues de su definicion, mientras que el a=10, lo tiene global 
/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    console.log(a);
  });
})();
x();
*/
  //La salida es una pantalla de alerta que dice "12" porque el alcance de var 12 tiene un scoop local a su function, pero es mandada a llamar justo despues de su definicion, por lo que tenemos el valor 12 de a definido.

/*
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
*/
 //La salida es una pantalla de alerta que dice "15" porque el alcance de var a= 15 tiene un alcance local hasta que se termine la funcion, es decir, hasta despues de terminar la funcion window.x
/*
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();
*/
 // a= undefined, por el hoisting que declaro la variable al inicio del scoop, pero la asignacion de valor esta abajo, y al momento del console.log aun no se llego a ese punto, mientras que foo=2

/*
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

    // result =  5, porque el resultado de someFunction es la function es regresar solo la funcion otherFunction,
      y el firstResult, regresa a = 5 ya que otherFunction tiene a=5 en su scope local ya corrido
*/

/*
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname()); =========== Le Name,  Porque esta accediendo a la propiedad de la propiedad de un objeto que es una funcion que regresa el this.fullname de ese objeto, no del anterior 
var aCall = obj.prop.getFullname;
console.log(aCall()); ========================== A Name  
console.log(obj.fullname); ===================== Full Name -- Porque accede a la propiedad del objeto obj


*/

/*
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
       a= 1, porque cuando corremos la funcion b, el return que esta solo dentro de ella, regresa un undefined porque no se especifica que regresar, por lo que no existe ningun otro valor que pueda tomar a, solo el que se inicializo antes de la funcion.
*/

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/
class Persona{
  constructor(nombre,apellido,edad,sexo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    console.log("Se genero la instancia de persona!",);
  }

  describe(){
    return " Hola, soy " + this.nombre + " " + this.apellido +" y tengo " + this.edad + " años"
  }
  dimeNomCompleto(){
    return this.nombre + " " + this.apellido;
  }
  dimeNombre(){
    return this.nombre
  }
  dimeApellido(){
    return this.apellido
  }
  dimeEdad(){
    return this.edad
  }
  dimeSexo(){
    return this.sexo
  }
  
};
/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16) */

/*
  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva) */

/*
  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/

class Product{
  constructor(nombre,valor){
    this.nombre = nombre;
    this.valor =  valor;
    console.log("Se genero la instancia de Producto!",);
  }
  value(){
    var valor= (this.valor*1.16) + this.valor
    return  valor;
  }
  item(){
    var it= [this.nombre, this.valor];
    return it;
  }
};

class Cart{
  constructor(){
    this.lista = []; 
    console.log("Se genero la instancia de Cart!",);
  }
  add(product){
    if(!(product instanceof Product)){
      throw new Error ("Debe ser tipo Producto")
    }
    this.lista.push(product);
  }

  total(){
    var total = 0;
    for( var i in this.lista){
      total += this.lista[i].value(); 
    }
    return total
  }
}

class Food extends Product {
  constructor (nombre,valor){
    super(nombre,valor);
    this.nombre = nombre;
    this.valor= valor;
  }
  value(){
    return this.valor;
  }

}

var prod1 = new Product('Sabritas',13);
var prod2 = new Product('Jugo', 10);

var cart = new Cart();
cart.add(prod1);
cart.add(prod2);

console.log(cart.total())