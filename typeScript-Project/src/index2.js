var product1 = {
    Name: "TV",
    Price: 32000.55,
    Stock: true,
    Rating: { Rate: 2.4, Count: 34000 },
    Cities: ["Delhi", "Hyd"]
};
console.log("Name=".concat(product1.Name, "\nPrice=").concat(product1.Price, "\nStock=").concat(product1.Stock, "\nRate=").concat(product1.Rating.Rate, "\nCount=").concat(product1.Rating.Count, "\nCities=").concat(product1.Cities[0], ", ").concat(product1.Cities[1]));
