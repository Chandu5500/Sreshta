var doJob=(type)=>{
    var result;
    var fVal=document.querySelector("#fVal").value;
    var sVal=document.querySelector("#sVal").value; 
    switch(type){
        case 'add':
            result=addValues(fVal,sVal);
            break;
        case 'sub':
            result=subValues(fVal,sVal);
            break;
        case 'mul':
            result=mulValues(fVal,sVal);
            break;
        case 'div':
            result=divValues(fVal,sVal);
            break;
    }

    var msg="The " + type +" result is "+result;
    document.querySelector(".rBlock").innerHTML=msg;
    document.querySelector(".cBlock").innerHTML=count;
}