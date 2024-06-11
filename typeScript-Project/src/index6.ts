interface HDFC_Version1{
    Personal:string;
    NRI:string
}
interface HDFC_Version2{
    Loans:string;
}
interface BankContract extends HDFC_Version1, HDFC_Version2{
    BankName:string;
}
let hdfc: BankContract = {
    BankName: "HDFC Bank",
    Personal: "Personal Banking",
    NRI: "NRI Banking",
    Loans: "Housing Loans"
}
for (var property in hdfc){
    console.log(`${property} - ${hdfc[property]}`)
}