const os = require('os')
const path = require('path')

// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.cpus());

// console.log(__dirname);  //To Know path
// console.log(__filename); //To know File Path and File name

console.log(path.dirname(__filename)); //To know path
console.log(path.basename(__filename)); //To know only File name
console.log(path.extname(__filename)); //To know File Extention
console.log(path.parse(__filename)); //It creates File Object
