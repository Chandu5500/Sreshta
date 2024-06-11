var cData;
var sData;
var collegeDetails=()=>{
    cData={
        cName:document.querySelector("#cname").value,
        cAddress:document.querySelector("#caddress").value,
        cCode:document.querySelector("#ccode").value,
    }
    console.log(cData);
}

var arrayStudentData=[];

var studentDetails=()=>{
    sData={
        sName:document.querySelector("#sname").value,
        sAge:document.querySelector("#sage").value,
        sGender:document.querySelector("input[name=gender]:checked").value,
        sSport:document.querySelector("#ssport").value,
    }
    console.log(sData);
    var sDetails=new StudentData(sData);
    sDetails.displayStudentData();
    arrayStudentData.push(sDetails);
    console.log(arrayStudentData);
}

class CollegeData{
    constructor(data){
        this.cName=data.cName;
        this.cAddress=data.cAddress;
        this.cCode=data.cCode;
    }
    displayCollegeData(){
        document.querySelector("#dcname").innerText=this.cName;
        document.querySelector("#dcaddress").innerText=this.cAddress;
        document.querySelector("#dccode").innerText=this.cCode;
    }
}

class StudentData extends CollegeData{
    constructor(data){
        super(cData)
        this.sName=data.sName;
        this.sAge=data.sAge;
        this.sGender=data.sGender;
        this.sSport=data.sSport;
    }
    displayStudentData(){
        document.querySelector("#dname").innerText=this.sName;
        document.querySelector("#dage").innerText=this.sAge;
        document.querySelector("#dgender").innerText=this.sGender;
        document.querySelector("#dsport").innerText=this.sSport;
        this.displayCollegeData();
    }
}