var product4 = {
    Name: "TV",
    Price: 25000.11,
    Qty: 3,
    CategoryName: "Electronics",
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total(), "\nCategory=").concat(this.CategoryName));
    }
};
product4.Print();
