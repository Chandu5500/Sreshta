import {addValues} from "./lib/mathLib.js";

document.querySelector("#addValBtn").addEventListener("click", ()=>{
    var a1=document.querySelector("#fval").value;
    var a2=document.querySelector("#sval").value;
    var result=addValues(a1,a2);
    document.querySelector("#result").innerHTML=result;
});