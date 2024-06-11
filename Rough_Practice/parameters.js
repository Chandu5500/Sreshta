function details(id, name, price, stock, cities, rating){
    if(price==undefined){
        console.log(`
        ID=${id}\n
        Name=${name}\n
        Stock=${stock}\n
        Cities=${cities}\n
        Rating=${rating.rate} [${rating.count}]
    `)
    }else{
        console.log(`
        ID=${id}\n
        Name=${name}\n
        Price=${price}\n
        Stock=${stock}\n
        Cities=${cities}\n
        Rating=${rating.rate} [${rating.count}]
    `)
    }
}
details(1, "TV", 20000, true, ["Chirala", "Perala"], {rate:4.5, count:400})
details(2, "Mobiles", undefined, false, ["HYD", "Chennai"], {rate:4.2, count:500})