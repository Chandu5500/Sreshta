var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var data={
        "productDetailsList":[
            {
              'image': "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg",
              'name': 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID.',
              'rating': 4.5,
    
              'price': 92900,
              'discountPercent': 12,
            },
            {
              'image': "https://m.media-amazon.com/images/I/719C6bJv8jL._AC_UY218_.jpg",
              'name': 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera.',
              'rating': 4.5,
    
              'price': 119900,
              'discountPercent': 10,
            },
            {
              'image': "https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_UY218_.jpg",
              'name': 'Apple 2023 MacBook Air (15-inch, M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB) - Midnight',
              'rating': 4.5,
    
              'price': 134900,
              'discountPercent': 6,
            },
            {
              'image': "https://m.media-amazon.com/images/I/618M+ksuptL._AC_UY218_.jpg",
              'name': 'Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 512GB SSD Storage.',
              'rating': 4.5,
              'price': 249900,
              'discountPercent': 8,
            }, 
        ]
    }
    data=JSON.stringify(data);
    //d='parseProductData('+data+')';
    setTimeout(()=>{
        res.send(data);
    })
});

module.exports = router;
