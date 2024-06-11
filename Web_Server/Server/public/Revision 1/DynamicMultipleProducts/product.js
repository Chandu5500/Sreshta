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
    var ulTag=document.createElement("ul");
    var li1=document.createElement("li");
    li1.innerText="Product Name: "+pDetails.name;
    ulTag.append(li1);
    
    var li2=document.createElement("li");

    var span1=document.createElement("span");
    li2.append(span1);
    span1.innerText=pDetails.price;
    span1.setAttribute("class","actualPrice");

    var span2=document.createElement("span");
    li2.append(span2);
    span2.innerText=pDetails.discountPrice;
    span2.setAttribute("class","discountPrice");
    ulTag.append(li2);

    var li3=document.createElement("li");
    li3.innerText="Manufacturor: "+pDetails.manufacturor;
    ulTag.append(li3);

    var li4=document.createElement("li");
    li4.innerText="Description: "+pDetails.description;
    ulTag.append(li4);

    var li5=document.createElement("li");
    li5.innerText="Rating: "+pDetails.rating;
    ulTag.append(li5);

    var li6=document.createElement("li");
    var imgTag=document.createElement("img");
    imgTag.setAttribute("src",pDetails.img);
    li6.append(imgTag);
    ulTag.append(li6);

    console.log(ulTag);
    document.querySelector(".mainContainer").append(ulTag);
}
var addProductData=()=>{
    document.querySelector(".mainContainer").innerHTML="";//Helps to do not repeat the contents on load page
    for( var i=0;i<pDetails.length;i++){
        displayDetails(pDetails[i]);
    }
}