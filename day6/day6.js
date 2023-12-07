const data = `
Time:        46     82     84     79
Distance:   347   1522   1406   1471
`;

const [time, distance] = data.trim().split('\n');

const timeArray = time.match(/\d+/gm).map(Number);
const distanceArray = distance.match(/\d+/gm).map(Number);
const dataSet = timeArray.map((time, idx) => ({
    time: parseInt(time, 10),
    distance: parseInt(distanceArray[idx], 10)
}));

console.log(dataSet);

const races = [];
dataSet.forEach(({time, distance}) => {
    let wins = 0;
    for(let i = 0; i <= time; i++){
        if(((time - i) * i) > distance) {
            wins++;
        }
    }
    races.push(wins);
});

let errorMargin = races.reduce((acc, cur) => acc * cur, 1);

console.log(errorMargin);