function f1(){
    var Mobile={
        "Name": "Realme",
        "Price": 20000,
        "Cities": ["Chirala", "Perala"],
        "Rating": {"Rate": 4.5, "Count":52000},
        "Quantity": 2,
        "Total": function(){
            return this.Quantity * this.Price;

        }
    }
    console.log(`Name=${Mobile.Name}\nPrice=${Mobile.Price}\nCities=${Mobile.Cities.toString()}\nRating=${Mobile.Rating.Rate} [${Mobile.Rating.Count}]\nQuantity=${Mobile.Quantity}\nTotal=${Mobile.Total()}`)
}
f1();