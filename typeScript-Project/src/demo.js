var Demo1 = /** @class */ (function () {
    function Demo1() {
    }
    Demo1.prototype.Total = function (qty, price) {
        return qty * price;
    };
    Demo1.prototype.Print = function () {
    };
    return Demo1;
}());
var obj = new Demo1();
obj.Print();
