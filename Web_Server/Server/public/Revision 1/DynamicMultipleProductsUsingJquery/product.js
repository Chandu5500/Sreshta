var pDetails=[
    {
        name:"Laptops",
        price:50000,
        discountPrice:45000,
        manufacturor:"Asus Corp",
        description:"Product is ready to use",
        rating:"4.5/5",
        img:"https://img.etimg.com/photo/msid-93619818/apple-laptops.jpg"
    },
    {
        name:"Phones",
        price:10000,
        discountPrice:9000,
        manufacturor:"Realme Corp",
        description:"Ready to play games",
        rating:"4/5",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmj9RZe3lJE-EXG6uDv2cm4LbwRiZu84PDc7ex-nZpQ&usqp=CAU&ec=48600113"
    },
    {
        name:"Chargers",
        price:500,
        discountPrice:400,
        manufacturor:"Moto",
        description:"Dual Charging ports",
        rating:"4.7/5",
        img:"https://i0.wp.com/motorolachargers.com/wp-content/uploads/2022/08/SJMC501XC15ET1.mainT_.png?fit=1500%2C1500&ssl=1"
    },
    {
        name:"Toys",
        price:1000,
        discountPrice:900,
        manufacturor:"Cactus",
        description:"Children Toy",
        rating:"4.5/5",
        img:"https://m.media-amazon.com/images/I/71w7tMlKSnL.jpg"
    }
]
var displayDetails=(pDetails)=>{
    var ulTag=$("<ul/>");
    var li1=$("<li/>");
    li1.text("Product Name: "+pDetails.name);
    ulTag.append(li1);
    
    var li2=$("<li/>");

    var span1=$("<span/>");
    span1.text(pDetails.price).attr("class","actualPrice");
    li2.append(span1);

    var span2=$("<span/>");
    span2.text(pDetails.discountPrice).attr("class","discountPrice");
    ulTag.append(li2);
    li2.append(span2);

    var li3=$("<li/>");
    li3.text("Manufacturor: "+pDetails.manufacturor);
    ulTag.append(li3);

    var li4=$("<li/>");
    li4.text("Description: "+pDetails.description);
    ulTag.append(li4);

    var li5=$("<li/>");
    li5.text("Rating: "+pDetails.rating);
    ulTag.append(li5);

    var li6=$("<li/>");
    var imgTag=$("<img/>").attr("src",pDetails.img);
    li6.append(imgTag);
    ulTag.append(li6);

    console.log(ulTag);
    $(".mainContainer").append(ulTag);
}
var addProductData=()=>{
    $(".mainContainer").innerHTML="";//Helps to do not repeat the contents on load page
    for( var i=0;i<pDetails.length;i++){
        displayDetails(pDetails[i]);
    }
}