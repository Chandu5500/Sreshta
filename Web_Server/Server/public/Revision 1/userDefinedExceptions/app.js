/*
var regButton=()=>{
    var uData={};
    uData.name=document.querySelector("#uName").value;
    uData.name=uData.name.trim();
    

    if(uData.name==""){
        document.querySelector(".err").style.display="block";
        return;
    }else{
        document.querySelector(".err").style.display="none";
    }

    uData.age=document.querySelector("#uAge").value;
    uData.age=parseInt(uData.age);
    if(uData.age<21){
        document.querySelector(".err1").style.display="block";
        return;
    }else{
        document.querySelector(".err1").style.display="none";
    }
    console.log(uData)
}
*/

var regButton=()=>{
    var uData={};
    uData.name=document.querySelector("#uName").value;
    uData.name=uData.name.trim();
    
    try{
        if(uData.name==""){
            throw "nameError"
            
        }else{
            document.querySelector(".err").style.display="none";
        }
        uData.age=document.querySelector("#uAge").value;
        if(uData.age.trim()==""){uData.age=0}
        uData.age=parseInt(uData.age);
        if(uData.age>=21 || uData.age<=0){
            throw "ageError"
            return;
        }else{
            document.querySelector(".err1").style.display="none";
        }
    }catch(error){
        switch(error){
            case "nameError":
                document.querySelector(".err").style.display="block";
                break;
            case "ageError":
                document.querySelector(".err1").style.display="block";
                break;
        }
        
        
    } 
    console.log(uData)
}