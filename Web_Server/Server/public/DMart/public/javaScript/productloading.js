var productBlock= [];
var productDetailsTemplate;

var loadProductsToPage=()=>{
    $.ajax({
        url: "get/product/details",
        method: 'GET',
        data:{},
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
            productBlock= data.productDetailsList;
            getProductTemplate();
        }
    });
} 


var getProductTemplate=()=>{
    $.ajax({
        url: 'templates/singleProductTemplate.htm',
        method: 'GET',
        success: (template)=>{
            console.log(template);
            productDetailsTemplate= Handlebars.compile(template)
            showProductDetails();
        }
    });
}


var showProductDetails=()=>{
    for (var i=0 ; i < productBlock.length ; i++){
        $("#productBlock").append(productDetailsTemplate(productBlock[i]));
    }
}

var logoutUser =()=>{
    $.ajax({
        url: '/user/logout',
        method: 'GET',
        dataType: 'JSON',
        success: (response)=>{
            loadTemplate('login');
            $('.figma').show();
        }
    })
}