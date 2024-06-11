var pDetails=[];
var productTemplates='';
$.ajax({
    url: 'template/productTemplates.htm',
    method: 'GET',
    success:(response)=>{
        productTemplates= Handlebars.compile(response)
    }
})


//http://localhost:8081/Revision%201/Ajax/Data/productData.json

var getProductData=()=>{
    $(".loadingBlock").show();
    fetch("http://localhost:8081/get/productInfo1", {
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
    $(".mainContainer").append(productTemplates(pDetails));

}


var addProductData=()=>{
    document.querySelector(".mainContainer").innerHTML="";//Helps to do not repeat the contents on load page
    for( var i=0;i<pDetails.length;i++){
        displayDetails(pDetails[i]);
    }
}


