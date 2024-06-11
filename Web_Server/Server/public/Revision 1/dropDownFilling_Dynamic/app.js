var collegeData={
    'C_01':{
        name: "St. Ann's College of Engineering and Technology",
        location:"Vetapalem"
    },
    'C_02':{
        name: "Chirala Engineering College",
        location:"Chirala"
    },
    'C_03':{
        name: "Vignan University",
        location:"Guntur"
    },
    'C_04':{
        name: "SRM University",
        location:"Chennai"
    },
}

/* Methods to fill options with in the college code box */

var fillCollegeCodeDetails=()=>{
    for (var tempKey in collegeData){
        var optionTag=document.createElement("option");
        optionTag.innerHTML=tempKey;
        document.querySelector("#collegeCodeDetails").append(optionTag);
    }
}

var setCollegeDetails=()=>{
    var selectedId=document.querySelector("#collegeCodeDetails").value;
    var selectedCollegeDetails=collegeData[selectedId];
    console.log(selectedCollegeDetails);

    //filling College name and Location
    document.querySelector("#cName").value=selectedCollegeDetails.name;
    document.querySelector("#cLocation").value=selectedCollegeDetails.location;
}

fillCollegeCodeDetails();