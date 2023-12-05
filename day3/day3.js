const fs = require('fs');

// Specify the path to your text file
const filePath = './day3/day3.txt';

// data lines
const lines = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    .split('\n')
    .filter(Boolean);

const opArray = ["+", "-", "*", "/", "#", "$", "@", "=", "%", "&"];

var validNumbers = [];
var dataMap = [];
var skipIndex = 0;

// Functions
function checkNumberBounds(startIndex, endIndex, mapIndex, num) {
    // check top row if not top row
    if (mapIndex !== 0) {
        // check top start
        if (opArray.includes(dataMap[mapIndex - 1][startIndex])) {
            console.log(num + ' hit on top start: ', dataMap[mapIndex - 1][startIndex]);
            return true;
        }
        // check top end
        if (opArray.includes(dataMap[mapIndex - 1][endIndex - 1])) {
            console.log(num + ' hit on top end: ', dataMap[mapIndex - 1][endIndex - 1]);
            return true;
        }
        // check top left
        if (startIndex !== 0 && opArray.includes(dataMap[mapIndex - 1][startIndex - 1])) {
            console.log(num + ' hit on top left: ', dataMap[mapIndex - 1][startIndex - 1]);
            return true;
        }
        // check top right
        if (endIndex != dataMap[mapIndex].length && opArray.includes(dataMap[mapIndex - 1][endIndex])) {
            console.log(num + ' hit on top right: ', dataMap[mapIndex - 1][endIndex]);
            return true;
        }
        // check top middle
        if (opArray.includes(dataMap[mapIndex - 1][endIndex - 2])) {
            console.log(num + ' hit on top middle: ', dataMap[mapIndex - 1][endIndex - 2]);
            return true;
        }
    }

    // check left of start index
    if (startIndex !== 0 && opArray.includes(dataMap[mapIndex][startIndex - 1])) {
        console.log(num + ' hit on left start: ', dataMap[mapIndex][startIndex - 1]);
        return true;
    }

    // check right of end index
    if (endIndex !== dataMap[mapIndex].length && opArray.includes(dataMap[mapIndex][endIndex])) {
        console.log(num + ' hit on right end: ', dataMap[mapIndex][endIndex]);
        return true;
    }

    // check bottom row if not bottom row
    if (mapIndex !== (dataMap.length - 1)) {
        // check bottom start
        if (opArray.includes(dataMap[mapIndex + 1][startIndex])) {
            console.log(num + ' hit on bottom start: ', dataMap[mapIndex + 1][startIndex]);
            return true;
        }
        // check bottom end
        if (opArray.includes(dataMap[mapIndex + 1][endIndex])) {
            console.log(num + ' hit on bottom end: ', dataMap[mapIndex + 1][endIndex]);
            return true;
        }
        // check bottom left
        var test = dataMap[mapIndex + 1][startIndex - 1];
        if (startIndex !== 0 && opArray.includes(test)) {
            console.log(num + ' hit on bottom left: ', dataMap[mapIndex + 1][startIndex - 1]);
            return true;
        }
        // check bottom right
        if (startIndex !== 0 && opArray.includes(dataMap[mapIndex + 1][endIndex])) {
            console.log(num + ' hit on bottom right: ', dataMap[mapIndex][endIndex]);
            return true;
        }
        // check bottom middle
        if (opArray.includes(dataMap[mapIndex + 1][endIndex - 2])) {
            console.log(num + ' hit on bottom middle: ', dataMap[mapIndex + 1][endIndex - 2]);
            return true;
        }
    }
    return false;
}

function validNumber(chr) {
    if (chr === '.' || opArray.includes(chr)) {
       return false;
    }
    return true;
}

function getFullNumber(idx, map) {
    if (map[idx]) {
        let firstNumber = map[idx];
        let secondNumber = map[idx+1];
        let thirdNumber = map[idx+2];
        if (validNumber(thirdNumber)) {
            return firstNumber + secondNumber + thirdNumber;
        } else if (validNumber(secondNumber)) {
            return firstNumber + secondNumber;
        } else {
            return firstNumber;
        }
    } else {
        return false;
    }
}

// Run Code
lines.forEach(line => {
    dataMap.push(line.split(''));
});

dataMap.forEach((map, mapIdx) => {
    console.log(map);
    map.forEach((chr, chrIdx) => {
        if (chr === '.' || chr === '\r' || opArray.includes(chr) || chrIdx !== 0 && chrIdx <= skipIndex) {
            if(skipIndex !== 0 && skipIndex === chrIdx) {
                skipIndex = 0;
            }
            return;
        } else {
            let num = getFullNumber(chrIdx, map);
            if (num !== false) {
                skipIndex = chrIdx + num.length;
                if (checkNumberBounds(chrIdx, skipIndex, mapIdx, num)) {
                    validNumbers.push(num);
                } else {
                    console.log(num + ' didnt hit.');
                }
            }
        }
    });
});

console.log('Total Sum: ', validNumbers.reduce((acc, count) => (acc += parseInt(count)), 0));