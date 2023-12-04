const fs = require('fs');

let codes = [];

// Specify the path to your text file
const filePath = './day1/day1.txt';

// data lines
const lines = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    .split('\n')
    .filter(Boolean);

// iterate
lines.forEach(row => {
    const numbersArray = row.match(/\d/g).map(Number);
    //console.log(numbersArray[0].toString() + numbersArray[(numbersArray.length - 1)].toString());
    var strNum = numbersArray[0].toString() + numbersArray[(numbersArray.length - 1)].toString();
    codes.push(strNum);
});

// Part 1: Sum
let total = codes.reduce((acc, count) => (acc += parseInt(count)), 0);
console.log('Part 1 - Total Sum: ', total);

// Part 2: 
var textNumMap = {
    'one': 1, 
    'two': 2, 
    'three': 3, 
    'four': 4, 
    'five': 5, 
    'six': 6, 
    'seven': 7, 
    'eight': 8, 
    'nine': 9
};

// assign
var part2codes = [];
let total2 = 0;

// iterate
lines.forEach(row => {
    let newRow = row;
    console.log(row);
    var objKeys = Object.keys(textNumMap).sort((a,b) => b.length - a.length);
    //console.log(objKeys);
    objKeys.forEach(k => {
        newRow = newRow.replaceAll(k, textNumMap[k].toString());
    });
    console.log(newRow);
    const numbersArray = newRow.match(/\d/g).map(Number);
    console.log(numbersArray);
    console.log(numbersArray[0].toString() + numbersArray[(numbersArray.length - 1)].toString());
    var strNum = numbersArray[0].toString() + numbersArray[(numbersArray.length - 1)].toString();
    total2 += parseInt(strNum);
});

// Part 2: Sum
console.log('Part 2 - Total Sum: ', total2);