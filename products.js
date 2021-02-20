class Products {
    constructor(name, description, quantity){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
class ProductsManagement{
    constructor(){
        this.listproducts = []
    }
    addProducts (product){
        this.listproducts.push(product);
    }
    removeProducts(product){
        for (var i = 0; i< this.listproducts.length; i++ ){
            if(this.listproducts[i] == product){
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, newproduct){
        for (var i = 0; i< this.listproducts.length; i++ ){
            if(this.listproducts[i] == product){
                this.listproducts[i] = newproduct;
                return;
            }
        }
    } 
    showProducts(){
        return this.listproducts;
    }
<<<<<<< HEAD
    showFirstProducts(){
        return this.listproducts[1];
    }
=======
>>>>>>> 1ce026cf1adeab19c52dc906c229aa7523ca48e8
}
export {Products,  ProductsManagement}



