var StatusCode1;
(function (StatusCode1) {
    StatusCode1[StatusCode1["NotFound"] = 404] = "NotFound";
})(StatusCode1 || (StatusCode1 = {}));
console.log("Status Code : ".concat(StatusCode1.NotFound, "\nStatus Text :").concat(StatusCode1[404]));
