interface Product{
    Name:string;
    Price:number;
}
interface Student{
    FirstName:string;
    Email:string;
}
class Service<T>{
    constructor(data:T){
        for(var property in data){
            console.log(`${property} : ${data[property]}`);
        }
    }
    public Details:T|null = null;
}
let tv  = new Service<Product>({Name: "Samsung TV", Price:50000.22});
tv.Details = {Name:"", Price:0};

let john = new Service<Student>({FirstName:"John", Email:"john@gmail.com"});
john.Details = {FirstName:"", Email:""};