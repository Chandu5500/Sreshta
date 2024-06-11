console.log("1");

$(document).ready(()=>{ //this was called last of execution.
    console.log("2");
    document.querySelector(".container").innerHTML="Hello Everyone, Have great day";
})

console.log("3");