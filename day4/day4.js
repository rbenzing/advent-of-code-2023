const fs = require('fs');

// Specify the path to your text file
const filePath = './day4/day4.txt';

var total = 0;

// Read the file synchronously
const lines = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    .split('\n')
    .filter(Boolean);

lines.pop();

const cardCopyTracker = lines.map(() => 1);

// parse lines into arrays
lines.forEach((line, idx) => {
    const cardNum = idx + 1;
    const [cardInfo, cardNumbers] = line.split('|');

    // number of matching numbers
    let matches = 0;
    
    // Extract winning numbers and card numbers as arrays of numbers
    const winningNumbersArray = cardInfo.match(/\d+/g).map(Number);
    const cardNumbersArray = cardNumbers.match(/\d+/g).map(Number);

    // parse the winning over the cards array
    cardNumbersArray.forEach(num => {
        if (winningNumbersArray.includes(num)) {
            console.log(num + ' matched on card ' + cardNum);
            matches++;
        }
    });

    if (matches > 0) {
        total += Math.pow(2, matches - 1);
    }

    const currentCardCopies = cardCopyTracker[idx];
    // get the card indexes for which we need to increase the count
    const startIdx = idx + 1;
    const endIdx = Math.min(lines.length - 1, idx + matches);
    // run the loop from start to end and add the counts
    for (let i = startIdx; i <= endIdx; i++) {
        cardCopyTracker[i] += currentCardCopies;
    }
});
console.log('Part 1 - Total Points: ', total);

let sum2 = cardCopyTracker.reduce((acc, count) => (acc += count), 0);
console.log('Part 2 - Total Points: ', sum2);