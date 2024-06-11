var addValues=()=>{
    var a=document.querySelector("#fVal").value;
    a=a.trim();
    if(a==''){
        document.querySelector(".fValErr").style.display="block";
    }else{
        document.querySelector(".fValErr").style.display="none";
    }
    a=parseInt(a); 
    var b=document.querySelector("#sVal").value;
    b=b.trim();
    if(b==''){
        document.querySelector(".sValErr").style.display="block";
    }else{
        document.querySelector(".sValErr").style.display="none";
    }
    b=parseInt(b);
    var result=a+b;
    document.querySelector(".rBlock").innerHTML=result;
    document.querySelector(".rContainer").style.display="block";
}

var validUserInput=(event)=>{
    if(event.charCode>=48 && event.charCode<=57){
        return true;
    }else{
        return false;
    }
}