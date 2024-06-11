function f1(){
    var values=["Chandu", 20, true, ["Mounika", "Sreshta"],function(){console.log("Hello! Everyone")}];
    var [name, age, status, female, hello]=values;
    console.log(female[1]);
    hello();
}
f1();