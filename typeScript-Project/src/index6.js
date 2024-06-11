var hdfc = {
    BankName: "HDFC Bank",
    Personal: "Personal Banking",
    NRI: "NRI Banking",
    Loans: "Housing Loans"
};
for (var property in hdfc) {
    console.log("".concat(property, " - ").concat(hdfc[property]));
}
