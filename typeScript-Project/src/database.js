var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connection = function (connectionString) {
        for (var property in connectionString) {
            console.log("".concat(property, " : ").concat(connectionString[property]));
        }
    };
    return Database;
}());
console.log("------------Connection with Oracle------------");
var ora = new Database();
ora.Connection({ username: "scott", password: "tiger", database: "empdb" });
console.log("------------Connection with MySql------------");
var mysql = new Database();
mysql.Connection({ host: "localhost", user: "root", password: "1234", dbname: "studb" });
