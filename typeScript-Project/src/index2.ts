interface ProductContract{
    Name:string;
    Price:number;
    Stock:boolean;
    Rating: {Rate:number, Count:number};
    Cities:string[];
}

let product1:ProductContract = {
    Name: "TV",
    Price: 32000.55,
    Stock: true,
    Rating: {Rate:2.4, Count: 34000},
    Cities: ["Delhi", "Hyd"]
}
console.log(`Name=${product1.Name}\nPrice=${product1.Price}\nStock=${product1.Stock}\nRate=${product1.Rating.Rate}\nCount=${product1.Rating.Count}\nCities=${product1.Cities[0]}, ${product1.Cities[1]}`)