'use strict'
const Store = require('./store.class');

// Creamos un nuevo almacén con id 1
const almacen = new Store(1);
// Antes deberás haber importado la 
// clase Store para poder usarla

// Añadimos los 4 objetos que nos piden
let producto1 = {name:'TV Samsung MP45', price:345.95, units:3}
let producto2 = {name:'Ábaco de madera', price:245.95}
let producto3 = {name:'impresora Epson LX-455', price:45.95}
let producto4 = {name:'USB Kingston 16GB', price:5.95, units:45}

try {
    almacen.addProduct(producto1)
} catch(error) {
    console.error(error)
}

try {
    almacen.addProduct(producto2)
} catch(error) {
    console.error(error)
}

try {
    almacen.addProduct(producto3)
} catch(error) {
    console.error(error)
}

try {
    almacen.addProduct(producto4)
} catch(error) {
    console.error(error)
}




// Hacemos las 5 modificaciones
try{
    almacen.changeProduct({id : 1 , price:325.90, units:8})

}catch(error){
    console.log(error)
}

try{
    almacen.changeProductUnits(2,15)
}catch(error){
    console.log(error)
}



try {
    almacen.changeProduct({id:3, price: 55.90, units: -2})
} catch(error) {
    console.error(error)
}

try {
    almacen.changeProductUnits(1,-10)
} catch(error) {
    console.error(error)
}


try {
    almacen.changeProduct({id:2, name: 'Ábaco de madera (nuevo modelo)'})
} catch(error) {
    console.error(error)
}

console.log(almacen)

// Mostramos por consola todo lo que nos piden
console.log(almacen.toString())
console.log('LISTADO DEL ALMACÉN alfabético')

let ordenadoAlfabeticamente1 = almacen.orderByName()
ordenadoAlfabeticamente1.forEach(producto => {
    console.log('- ' + producto)
});



// Eliminamos los 2 productos
try {
    almacen.delProduct(1)
} catch(error) {
    console.error(error)
}

try {
    almacen.delProduct(3)
} catch(error) {
    console.error(error)
}

// Mostramos por consola todo lo que nos piden

console.log('LISTADO DEL ALMACÉN por existencias')

let ordenadoPorUnidades = almacen.orderByUnits()
ordenadoPorUnidades.forEach(producto => {
console.log('- ' + producto)
});

console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS')

let productosPocasExistencias = almacen.underStock(10)
productosPocasExistencias.forEach(producto => {
    console.log('- ' + producto)
});


