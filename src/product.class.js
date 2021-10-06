// Aquí la clase Product
class Product{
    constructor(id,name,price,units = 0){
    this.id = id;
    this.name = name;
    this.price = price;
    this.units = units;
    }
    
    changeUnits(units){
        if(this.units + units < 0){
            throw 'no puedes restar' + units + ' unidades porque solo tienes ' + this.units;
        }
        this.units += units
        return this
    }

    productImport(){
        return this.price * this.units
    }

    toString(){
        return this.name + ": " + this.units +" uds. x " + this.price + " €/u = " + this.productImport() + " €"; 
    }
}




module.exports = Product;
