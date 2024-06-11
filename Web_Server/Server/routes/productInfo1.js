var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var data={
    "productDetailsList":[
        {
            "name":"Laptops",
            "price":50000,
            "discountPrice":45000,
            "manufacturor":"Asus Corp",
            "description":"Product is ready to use",
            "rating":"4.5/5",
            "img":"https://img.etimg.com/photo/msid-93619818/apple-laptops.jpg"
        },
        {
            "name":"Phones",
            "price":10000,
            "discountPrice":9000,
            "manufacturor":"Realme Corp",
            "description":"Ready to play games",
            "rating":"4/5",
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmj9RZe3lJE-EXG6uDv2cm4LbwRiZu84PDc7ex-nZpQ&usqp=CAU&ec=48600113"
        },
        {
            "name":"Chargers",
            "price":500,
            "discountPrice":400,
            "manufacturor":"Moto",
            "description":"Dual Charging ports",
            "rating":"4.7/5",
            "img":"https://i0.wp.com/motorolachargers.com/wp-content/uploads/2022/08/SJMC501XC15ET1.mainT_.png?fit=1500%2C1500&ssl=1"
        },
        {
            "name":"Toys",
            "price":1000,
            "discountPrice":900,
            "manufacturor":"Cactus",
            "description":"Children Toy",
            "rating":"4.5/5",
            "img":"https://m.media-amazon.com/images/I/71w7tMlKSnL.jpg"
        }
    ]
};
  data=JSON.stringify(data);
  //d='parseProductData('+data+')';
  setTimeout(()=>{
    res.send(data);
  },1000)
  
});

module.exports = router;
