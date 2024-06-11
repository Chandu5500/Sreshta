var doJob=(type)=>{
    var result;
    var fVal=document.querySelector("#fVal").value;
    var sVal=document.querySelector("#sVal").value; 
    switch(type){
        case 'add':
            result= mathUtil.addValues(fVal,sVal);
            break;
        case 'sub':
            result= mathUtil.subValues(fVal,sVal);
            break;
        case 'mul':
            result= mathUtil.mulValues(fVal,sVal);
            break;
        case 'div':
            result= mathUtil.divValues(fVal,sVal);
            break;
    }

    var msg="The " + type +" result is "+result;
    document.querySelector(".rBlock").innerHTML=msg;
    document.querySelector(".cBlock").innerHTML=count;
}