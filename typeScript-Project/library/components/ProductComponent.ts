import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate{
    Name = "Samsung TV";
    Price = 56000.44;
    Qty = 3;
    Total(){
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`)
    }
}