function f1(){
    var name="Chandu";
    var age=24;
    var msg1="Hi! "+ name +" you will be "+(age+1)+" by the next year"
    var msg2=`Hi! ${name} you will be ${age+1} by the next year`
    console.log(msg1);
    console.log(msg2)
}
f1();