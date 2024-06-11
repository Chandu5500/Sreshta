interface ProductDetails{
    Name: string;
    readonly Price: number
}
let product2: ProductDetails={
    Name: "TV",
    Price: 25000
}
product2.Name= "Samsung TV";
product2.Price= 35000;  //invalid - Readonly
console.log(`Name=${product2.Name}\nPrice=${product2.Price}`)