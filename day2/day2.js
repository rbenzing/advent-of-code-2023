const fs = require('fs');

// Specify the path to your text file
const filePath = './day2/day2.txt';

const red = 12;
const blue = 14;
const green = 13;

// data lines
const lines = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    .split('\n')
    .filter(Boolean);

function isGameValid(game) {
    let colors = game.split(',');
    let invalid = false;
    colors.forEach(c => {
        if (c.includes('red')) {
            let num = parseInt(c.replace('red',''));
            if (num > red) {
                console.log('Red 12 Invalid:', num);
                invalid = true;
            }
        }
        if (c.includes('blue')) {
            let num = parseInt(c.replace('blue',''));
            if (num > blue) {
                console.log('Blue 14 Invalid:', num);
                invalid = true;
            }
        }
        if (c.includes('green')) {
            let num = parseInt(c.replace('green',''));
            if (num > green) {
                console.log('Green 13 Invalid:', num);
                invalid = true;
            }
        }
    });
    if (invalid) {
        return false;
    } else {
        return true;
    }
}

var totalGames = 0;

// iterate
lines.forEach((row, idx) => {
    const gameId = idx + 1;
    let possibleGames = 0;
    let [gameInfo, games] = row.replace(/\s/g, '').split(':');
    games = games.split(';');
    console.log(games);
    games.forEach(game => {
        if (isGameValid(game)) {
            possibleGames++;
        }
    });
    console.log(gameInfo + ' has ' + possibleGames + ' possible games');
    if (games.length === possibleGames) {
        totalGames += gameId;
    }
});

console.log('Part 1 - Total Games: ', totalGames);