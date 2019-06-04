// Recorre un arreglo usando un callback, imprime cada elemento.

arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.forEach(v => console.log(v))

//Haz varios callbacks de forma que se imprima:

//1 despues de 3 segundos:
setTimeout(() => { console.log(1) }, 3000);
//2 despues de 1 segundo:
setTimeout(() => { console.log(2) }, 1000);
//3 despues de 4 segundos:
setTimeout(() => { console.log(3) }, 4000);

//Escribe un callback que recibe un argumento y lo imprime:
//Crea una funcion que recibe el callback anterior y lo ejecuta:

function callback(fun) {
    var nombre = "Raquel";
    console.log('Hola ' + nombre)
    fun(nombre);
}
callback(function (nom) {
    console.log("Hola " + nom);
});

//Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Despues debe llamar a un tercer callback con el valor que regresa el segundo.

function first(callback) {
    callback('first');
}

function second(value, callback) {
    callback(`second , ${value}`)
}

function third(firstValue, secondValue, callback) {
    callback(`third , (${secondValue}), ${firstValue}`);

}

first(firstValue => {
    second(firstValue, secondValue => {
        third(firstValue, secondValue, thirdValue => {
            console.log(thirdValue);
        });
    });
});

// Convierte todos los ejercicios de la parte uno a usar Promises (solo 1,2 y ultimo)

//Recorre arreglo
let promise = new Promise(function (resolve, reject) {
    ['a', 'b', 'c', 'd'].forEach(v => console.log(v))
    if (arr10.length == 4) {
        resolve('Se imprimio el array: [' + arr10 + ']'); // fulfilled
    } else {
        var reason = new Error('It broke');
        reject(reason); //reject
    }
});

['a', 'b', 'c', 'd'].forEach(v => Promise.resolve(v).then(v => console.log(v)));

//Varios callback 
//1 despues de 3 segundos:
let prom1 = Promise.resolve('Done 1').then(setTimeout(() => { console.log(1) }, 3000));
//2 despues de 1 segundo:
let prom2 = Promise.resolve('Done 2').then(setTimeout(() => { console.log(2) }, 1000));
//3 despues de 4 segundos:
let prom3 = Promise.resolve('Done 3').then(setTimeout(() => { console.log(3) }, 4000));

Promise.all([prom1, prom2, prom3]);

// CB Hell
Promise.resolve('first').then(firstValue => {
    Promise.resolve(`second ${firstValue}`).then(secondValue => {
        Promise.resolve(`third, (${secondValue}) ,${firstValue} `).then(console.log);
    });
});

// Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

Promise.resolve('Done').then(v => console.log(' This is ' + v)).then(v => Promise.reject(console.log('Not anymore! ' + v)))

//Agrega un catch al ejercicio anterior

Promise.resolve(10).then(v => Math.pow(v, 2)).then(v => Promise.reject(v * 2)).catch(e => console.log(e));

//Agrega un finally al ejercicio anterior
Promise.resolve(10).then(v => Math.pow(v, 2)).then(v => Promise.reject(v * 2)).catch(e => console.log(e)).finally(()=> console.log('Termino'));

//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
let prom = () => {
    let p1 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'Como estas'));
    let p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Adios'));
    let p3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Hola'));
    return Promise.race([p1, p2, p3]);
}
// Con encadenamiento de promesas
//prom().then((mensaje) => console.log(mensaje));
// Con async / await
async function ej3() {
    var res = await prom();
    console.log(res);
}
ej3()

//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
let promesa = () => {
    let prom1 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'Promesa 1'));
    let prom2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Promesa 2'));
    let prom3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Promesa 3'));
    let prom4 = new Promise((resolve, reject) => setTimeout(resolve, 8000, 'Promesa 4'));
    return Promise.all([prom1, prom2, prom3, prom4]);
}
promesa().then((mensaje) => console.log(mensaje));
//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
Promise.resolve(10).then(v => Math.pow(v, 2)).then(v => Promise.reject(v * 2)).catch(e => console.log(e));
//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
Promise.resolve(10).then(v => Math.pow(v, 2)).then(v => Promise.reject(v * 2)).catch(e => console.log(e + 'ERROR')).then((v) => {console.log(v*2)}).catch(e => console.log(e + 'CATCH 2'));