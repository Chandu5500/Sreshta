function verifyPassword(password, success, error){
    if(password=="admin"){
        success();
    }else{
        error();
    }
}
verifyPassword("admin", function(){
    console.log("Login success");
}, function(){
    console.log("Login failed");
})