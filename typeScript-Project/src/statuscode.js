var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Unauthorized"] = 0] = "Unauthorized";
    StatusCodes[StatusCodes["Ok"] = 200] = "Ok";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Disconnected"] = 405] = "Disconnected";
})(StatusCodes || (StatusCodes = {}));
console.log("".concat(StatusCodes.Unauthorized, "\n").concat(StatusCodes.Disconnected));
