interface ProductDetails1{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print?():void;
}
let product3:ProductDetails1 = {
    Name: "TV",
    Price: 25000.11,
    Qty: 3,
    Total: function(){
        return this.Qty * this.Price;
    },
    Print: function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`)
    }
}
product3.Print();