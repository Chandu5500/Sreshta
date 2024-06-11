var product3 = {
    Name: "TV",
    Price: 25000.11,
    Qty: 3,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
product3.Print();
