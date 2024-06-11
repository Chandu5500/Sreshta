var pDetails={
    name:"Laptops",
    price:50000,
    discountPrice:45000,
    manufacturor:"Asus Corp",
    description:"Product is ready to use",
    rating:"4.5/5",
    img:"https://img.etimg.com/photo/msid-93619818/apple-laptops.jpg"
}
var displayDetails=()=>{
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
