var schoolDetails={
    schoolname:"ABC EM School",
    schoollocation:"HYD",
    schoolrating:"4.5/5"
}

var registerDetails=()=>{
    var sData=Object.create(schoolDetails)
    sData.name=document.querySelector("#sname").value;
    sData.age=document.querySelector("#sage").value;
    sData.class=document.querySelector("#sclass").value;

    sData.displayData=()=>{
        console.log("Student Name: "+sData.name);
        console.log("Age: "+sData.age);
        console.log("Class: "+sData.class);
        console.log("School name: "+sData.schoolname);
        console.log("School Location: "+sData.schoollocation);
        console.log("School rating: "+sData.schoolrating);
    }
    sData.displayData();
}