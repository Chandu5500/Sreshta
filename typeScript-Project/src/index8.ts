class Super{
    public Name:string = "TV";
    private Price:number = 25000.1;
    protected Stock:boolean = true;
}
class Derived extends Super{
    public Print(obj:Derived){
        obj.Name;
        obj.Stock;
    }
}
let obj = new Derived();