import {Products, ProductsManagement} from "./products.js";

class Ui{
    constructor(){
        this.uiName= document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm =  document.getElementById("form-data");
        this.container =document.getElementById("container-table");
        this.manager = new ProductsManagement();
        let p1 = new Products("pollo", "pollo sofia", 20);
        let p2 = new Products("galletas", "galletas mabel", 50);
        let p3 = new Products("galletas", "galletas cracker", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
    }
    loadTable(){
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++){
            html += ` 
            <tr>
                <td scope="row">${this.manager.showProducts()[i].name}</td>
                <td>${this.manager.showProducts()[i].description}</td>
                <td>${this.manager.showProducts()[i].quantity}</td>
            </tr>`;
        }
        this.container.innerHTML = html ;
    }
}
let ui = new Ui();
ui.loadTable();
