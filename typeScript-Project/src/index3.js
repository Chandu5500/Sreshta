var product2 = {
    Name: "TV",
    Price: 25000
};
product2.Name = "Samsung TV";
product2.Price = 35000; //invalid - Readonly
console.log("Name=".concat(product2.Name, "\nPrice=").concat(product2.Price));
