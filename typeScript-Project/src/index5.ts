interface ProductDetails1{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print?():void;
}
interface CategoryContract extends ProductDetails1{
    CategoryName:string;
}
let product4:CategoryContract = {
    Name: "TV",
    Price: 25000.11,
    Qty: 3,
    CategoryName: "Electronics",
    Total: function(){
        return this.Qty * this.Price;
    },
    Print: function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}\nCategory=${this.CategoryName}`)
    }
}
product4.Print();