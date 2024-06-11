var taskList=[
    " Do the Project Review",
    " Do the development of new module",
    " Do the code review of all modules",
    " Do the end to end testing of application",
    " Do the developement of application",
    " Create JIRA tickets for coming sprints"
]

var empName;
var saveData=()=>{
    empName=document.querySelector("#eName").value;
}

var createContainer=()=>{
    var divTag=document.createElement("div");
    divTag.setAttribute("class","container");
    divTag.setAttribute("id","container")
    document.querySelector(".maincontainer").append(divTag)
}

var showData=()=>{
    var taskIndex=Math.floor(Math.random()*taskList.length);
    var task=taskList[taskIndex]

    try{
        document.querySelector("#container").innerHTML="Mr " +empName + task;
    }catch(error){
        alert("You have missed the flow of buttons, Please try again and follow the buttons")
    }finally{
        setTimeout(()=>{
            document.querySelector(".thanksBlock").innerHTML="Mr " +empName +" Thanks for using our webpage";
            document.querySelector(".thanksBlock").style.display="block"; 
        },3000)
    }
}