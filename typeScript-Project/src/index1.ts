
let products:{Name:string, Price:number}[] = [
    {Name: "TV", Price: 35000.44},
    {Name: "Mobile", Price: 5000.33}
];
for(var product of products){
    console.log(product.Name);
}