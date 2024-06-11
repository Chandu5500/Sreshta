var sDetails={
    readDetails(){
        this.name=document.querySelector("#sname").value;
        this.age=document.querySelector("#sage").value;
        this.gender=document.querySelector("input[name=gender]:checked").value;
        this.class=document.querySelector("#sclass").value;
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
            this.grade="Passed"
        }else{
            this.grade="Surprise"
        }
    },
    displayDetails(){
        this.readDetails();
        document.querySelector("#dname").innerTEXT=this.name;
        document.querySelector("#dage").innerTEXT=this.age;
        document.querySelector("#dgender").innerTEXT=this.gender;
        document.querySelector("#dclass").innerTEXT=this.class;
        document.querySelector("#dmarks").innerTEXT=this.marks;
        document.querySelector("#dtotal").innerTEXT=this.total;
        document.querySelector("#davg").innerTEXT=this.avg;
        document.querySelector("#dgrade").innerTEXT=this.grade;
    }
}
var generateProgressCard=()=>{
    sDetails.displayDetails();
}