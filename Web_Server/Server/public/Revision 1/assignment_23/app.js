var sData=[];
var clearData=()=>{
    document.querySelector("#sname").value="";
    document.querySelector("#sage").value="";
    document.querySelector("input[name=gender]").checked=false;
    document.querySelector("#scountry").value="";
}

/* Method to read data from input elements*/

var registerDetails=()=>{
    var udata={};
    udata.name=document.querySelector("#sname").value;
    udata.age=document.querySelector("#sage").value;
    udata.gender=document.querySelector("input[name=gender]:checked").value;
    udata.country=document.querySelector("#scountry").value;
    sData.push(udata);
    console.log(sData);
    addDatatoTable(udata, sData.length);
    clearData();
}

/* 
*Method to render user obj to table
*obj->userdetails
*sno->index position

*/

var addDatatoTable=(obj, sno)=>{
    var trTag=document.createElement("tr");
    trTag.setAttribute("id","id_"+sno);
    var td1=document.createElement("td");
    td1.innerText=sno;
    trTag.append(td1);

    var td2=document.createElement("td");
    td2.innerText=obj.name;
    trTag.append(td2);

    var td3=document.createElement("td");
    td3.innerText=obj.age;
    trTag.append(td3);

    var td4=document.createElement("td");
    td4.innerText=obj.gender;
    trTag.append(td4);

    var td5=document.createElement("td");
    td5.innerText=obj.country;
    trTag.append(td5);

    var td6=document.createElement("td");

    var input1=document.createElement("input");
    input1.setAttribute("type","button");
    input1.setAttribute("value","Edit");
    input1.addEventListener("click", (event)=>{
        edit(event);
    })
    td6.append(input1);

    var input2=document.createElement("input");
    input2.setAttribute("type","button");
    input2.setAttribute("value","Delete");
    input2.setAttribute("index",(sno-1))
    input2.addEventListener("click", (event)=>{
        delete1(event);
    })
    td6.append(input2);
    trTag.append(td6);

    document.querySelector("tbody").append(trTag);
}

var edit=(event)=>{
    alert(event.target.getAttribute("index"));
}

var delete1=(event)=>{
    var index=event.target.getAttribute("index");
    sData.splice(index,1);
    renderAllDetails();
}

var renderAllDetails=()=>{
    document.querySelector("tbody").innerHTML="";
    for(var i=0; i<sData.length; i++){
        addDatatoTable(sData[i],i+1);
    }
}