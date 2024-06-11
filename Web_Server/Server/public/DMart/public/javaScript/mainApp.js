var loadTemplate=(page)=>{
    var templateurl;
    switch(page){
        case 'login':
            templateurl= 'templates/login.htm';
            break;
        case 'forgotPsw':
            templateurl= 'templates/forgotPsw.htm';
            break;
        case 'signup':
            templateurl= 'templates/signup.htm';
            break;
        case 'productBlock':
            $('.figma').hide();
            templateurl= 'templates/productBlock.htm';
            break;
    }
    $.ajax({
        url: templateurl,
        mehod: 'GET',
        data: {},
        success: (response)=>{
            $(".templatesContainer").html(response);
            if (page == 'productBlock'){  //products Details page
                loadProductsToPage();
            }
        },
        error: ()=>{
            console.log("Error");
        }
    });
};

$.ajax({
    url: '/check/user/validation',
    method: 'GET',
    dataType: 'JSON',
    success: (response) =>{
        if (response.status == true){
            loadTemplate('productBlock');
        }else{
            loadTemplate('login');
        }
    }
})


var validateUserData=()=>{
    var userData={
        userId: $("#userId").val(),
        userPsw: $("#userPsw").val()
    };

    $.ajax({
        url: "/validate/user/details",
        data: userData,
        dataType: 'JSON',
        method: 'POST',
        success: (response)=>{
            console.log(response);
            if (response.msg != "Valid"){
                $(".errBlock").show();
            }else{
                loadTemplate("productBlock");
            }
        }
    });
    console.log(userData);
};