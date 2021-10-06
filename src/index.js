'use strict'
const Store = require('./store.class');

// Creamos un nuevo almacén con id 1
const almacen = new Store(1);
// Antes deberás haber importado la 
// clase Store para poder usarla

// Añadimos los 4 objetos que nos piden
let producto1 = {name:'TV Samsung MP45', price:345.95, units:3}
almacen.addProduct(producto1);
let producto2 = {name:'Ábaco de madera', price:245.95}
almacen.addProduct(producto2);
let producto3 = {name:'impresora Epson LX-455', price:45.95}
almacen.addProduct(producto3);
let producto4 = {name:'TV Samsung MP45', price:345.95, units:3}
almacen.addProduct(producto4);
almacen.changeProductUnits(1,50)
// Hacemos las 5 modificaciones


// Mostramos por consola todo lo que nos piden

// Eliminamos los 2 productos

// Mostramos por consola todo lo que nos piden

