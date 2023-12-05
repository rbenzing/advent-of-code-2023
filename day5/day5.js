const fs = require('fs');

// Specify the path to your text file
const filePath = './day5/day5.txt';

// data lines
var lines = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    .split('\n')
    .filter(Boolean);

const seeds = lines[0].match(/\d+/g).map(Number);

// remove the first line of seeds and initial space
lines.shift();
lines.shift();

var mapped = new Map();
var currentType = null;

lines.forEach(line => {
    if (line === '') return;

    if (line.includes('map:')) {
        line = line.trim();
        switch(line) {
            case 'seed-to-soil map:':
                currentType = 'seed-to-soil';
                mapped.set(currentType, []);
                break;
            case 'soil-to-fertilizer map:':
                currentType = 'soil-to-fertilizer';
                mapped.set(currentType, []);
                break;
            case 'fertilizer-to-water map:':
                currentType = 'fertilizer-to-water';
                mapped.set(currentType, []);
                break;
            case 'water-to-light map:':
                currentType = 'water-to-light';
                mapped.set(currentType, []);
                break;
            case 'light-to-temperature map:':
                currentType = 'light-to-temperature';
                mapped.set(currentType, []);
                break;
            case 'temperature-to-humidity map:':
                currentType = 'temperature-to-humidity';
                mapped.set(currentType, []);
                break;
            case 'humidity-to-location map:':
                currentType = 'humidity-to-location';
                mapped.set(currentType, []);
                break;
            default:
        }
        return;
    }

    const [
        destination, 
        source, 
        range
    ] = line.split(" ");

    // get current value and push next line
    let typeValue = mapped.get(currentType);
    typeValue.push([source, destination, range]);

    // update new value
    mapped.set(currentType, typeValue);

    let keys = Array.from( mapped.entries() );
    console.log(keys.toString());
});