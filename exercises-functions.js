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

}

// Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse
// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map
// Explica cual es la salida de las siguientes funciones y porqué:
/*
var a = 12;
(function() {
  alert(a);
})();
*/

/*
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
*/

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

/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();
*/

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
console.log(obj.prop.getFullname());
var aCall = obj.prop.getFullname;
console.log(aCall());
console.log(obj.fullname);
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
*/

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/