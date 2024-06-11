function f1(){
    var values=["Chandu", 20, true, ["Mounika", "Sreshta"],function(){console.log("Hello! Everyone")}];
    console.log(values[0]);
    console.log(values[3][1])
    values[4]();
}
f1();