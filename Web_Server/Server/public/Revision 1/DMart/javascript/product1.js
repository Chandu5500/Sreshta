var pDetails=[];
var productData='';
$.ajax({
    url: 'template/productData.htm',
    method: 'GET',
    success:(response)=>{
        productData= Handlebars.compile(response)
    }
})


//http://localhost:8081/Revision%201/Ajax/Data/productData.json

var getProductData=()=>{
    $(".btn").hide();
    $(".loadingBlock").show();
    fetch("http://localhost:8081/get/productDMart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => response.json()).then(data =>{
        $(".loadingBlock").show();
        pDetails=data.productDetailsList;
        addProductData();
    }).catch ((error) => {
        $(".errorBlock").show();
        console.log("Error")
        console.error("Error:", error);
    });

}

var displayDetails=(pDetails)=>{
    pDetails.discountPrice=pDetails.price-(pDetails.price*pDetails.discountPercent)/100;
    $(".content").append(productData(pDetails));
}


var addProductData=()=>{
    document.querySelector(".content").innerHTML="";//Helps to do not repeat the contents on load page
    for( var i=0;i<pDetails.length;i++){
        displayDetails(pDetails[i]);
    }
}


