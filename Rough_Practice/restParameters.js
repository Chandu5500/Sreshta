function details(productTitle, ...productDetails){
    var[id, Name, Price, Status, Cities, Rating]=productDetails;
    console.log(`
        ${productTitle}\n
        ID=${id}\n
        Name=${Name}\n
        Price=${Price}\n
        Stock=${Status}\n
        Cities=${Cities}\n
        Rating=${Rating.rate} [${Rating.count}]
    `)
}
details("Product Details", 1, "TV", 20000, true, ["Chirala", "Perala"], {rate: 4.5, count: 200})