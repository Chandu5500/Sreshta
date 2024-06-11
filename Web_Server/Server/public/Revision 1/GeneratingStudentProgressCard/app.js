var sDetails={
    readUserDetails(){
        this.name=document.querySelector("#sName").value;
        this.age=document.querySelector("#sAge").value;
        this.gender=document.querySelector("input[name=gender]:checked").value;
        this.class=document.querySelector(".sClass").value;
        this.marks=[];
        var id;
        for(var i=1;i<=5;i++){
            id="#m"+i;
            this.marks.push(parseInt(document.querySelector(id).value));
        }
        this.getTotalAndAvg();
    },
    getTotalAndAvg(){
        this.total=0;
        for(var j=0;j<this.marks.length;j++){
            this.total+=this.marks[j];
        }
        this.avg=this.total/this.marks.length;
        this.getGrade();
    },
    getGrade(){
        if(this.avg>=40){
            this.grade="passed";
        }else{
            this.grade="Surprise";
        }
    },
    displayDetails(){
        this.readUserDetails();
        document.querySelector("#dname").innerText=this.name;
        document.querySelector("#dage").innerText=this.age;
        document.querySelector("#dgender").innerText=this.gender;
        document.querySelector("#dclass").innerText=this.class;
        document.querySelector("#dmarks").innerText=this.marks;
        document.querySelector("#dtotal").innerText=this.total;
        document.querySelector("#davg").innerText=this.avg;
        document.querySelector("#dgrade").innerText=this.grade;
        document.querySelector(".displayBlock").style.display="block"
    }
}
var generateProgressCard=()=>{
    sDetails.displayDetails();
}