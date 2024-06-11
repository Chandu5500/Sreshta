const http = require('http')

const {addNums, subNums, mulNums, divNums} = require('./demoModule')

console.log(addNums(10,5));
console.log(subNums(10,5));
console.log(mulNums(10,5));
console.log(divNums(10,5));