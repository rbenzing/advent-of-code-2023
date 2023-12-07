const data = `
Time:      7  15   30
Distance:  9  40  200
`;

const [time, distance] = data.trim().split('\n');

const timeArray = time.match(/\d+/gm).map(Number);
const distanceArray = distance.match(/\d+/gm).map(Number);

var startSpeed = 0;

console.log(timeArray);
console.log(distanceArray);