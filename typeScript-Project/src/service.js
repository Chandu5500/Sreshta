var Service = /** @class */ (function () {
    function Service(data) {
        this.Details = null;
        for (var property in data) {
            console.log("".concat(property, " : ").concat(data[property]));
        }
    }
    return Service;
}());
var tv = new Service({ Name: "Samsung TV", Price: 50000.22 });
tv.Details = { Name: "", Price: 0 };
var john = new Service({ FirstName: "John", Email: "john@gmail.com" });
john.Details = { FirstName: "", Email: "" };
