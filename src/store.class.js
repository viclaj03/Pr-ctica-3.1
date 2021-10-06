const Product = require('./product.class');

// Aquí la clase Store
class Store{
    constructor(id){
        this.id= id
        this.products = []
    }

    findProduct(id){
       return this.products.find(item => item.id === id);
    }

    addProduct(data){
        if(!data.name){
            throw "El producto debe tener name"
        }
        if(!data.price ||  isNaN(data.price)){
            throw "El producto debe tener un precio"
        }

        if(data.price < 0){
            throw "El producto debe tener un precio positivo"
        }
        if(data.units !== undefined &&  isNaN(data.units)){
            throw "unidades debe ser numero"
        }

        if(data.units < 0){
            throw "Unidades negativas"
        }
        if( data.units !== undefined && !Number.isInteger(data.units) ){
            throw "Unidades debe ser integuer"
        }
        
        const newProducto = new Product(
            this.maxid() +1 ,
            data.name,
            data.price,
            data.units
        )
        this.products.push(newProducto);
        return newProducto;
        }
       

    maxid(){
        return this.products.reduce((max,item) => item.id > max ? item.id  : max, 0);
    }

    delProduct(id ){
        let producto = this.findProduct(id);
        if(producto === 'undefined' ){
            throw "no existe producto"
        } else if (producto.units > 0){
            throw "hay unidades"
        }else{
        this.products.splice(this.products.findIndex(item => item.id === producto.id))
        return producto;
        }
        
        
    }

    changeProduct(item){
        let producto = this.findProduct(item.id);
        if(producto === undefined ){
            throw "No existe el producto"
        }
        if (item.price || item.price == 0){
            if(isNaN(item.price) || item.price < 0){
                throw "Debe ser un numero"
            }
            producto.price = item.price 
        }
        if (item.units){
            if( data.units !== undefined && !Number.isInteger(data.units) ){
                throw "Unidades debe ser integuer"
            }
            producto.changeUnits(item.units)
        }        
        return producto
    }

    changeProductUnits(id,unidades){
        let producto = this.findProduct(id);
        if(producto === undefined ){
            throw "No existe el producto"
        }
        if(producto.units + unidades < 0){
            throw "error"
        }
        if( unidades !== undefined && !Number.isInteger(unidades) ){
            throw "Unidades debe ser integuer"
        }
            producto.changeUnits(unidades)
               
        return producto
    }

    totalImport(){
        return this.products.reduce((total,precio)=> total += precio.productImport(),0)
    }

    underStock(units){
        return this.products.filter(item => item.units < units)
    }

    orderByUnits(){
        return this.products.sort((item1, item2) => item1.units < item2.units)
    }

    orderByName(){
        return this.products.sort((item1, item2) => item1.name.localeCompare(item2.name))
    }

    toString(){
       let texto = "Almacén" + this.id + " => "+ this.products.length  +" productos: "+ this.totalImport  + "€"

       this.products.join(a)


    }

}

module.exports = Store
// y tendrás que exportarla
