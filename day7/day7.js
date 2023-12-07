// data
const data = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

var total = 0;
const games = {};
data.split('\n').forEach(line => {
    const [card, bet] = line.trim().split(' ');
    games[card] = bet;
});

const weightedHands = Object.keys(games).map(key => 
    key.replace(/A/g, '14')
        .replace(/K/g, '13')
        .replace(/Q/g, '12')
        .replace(/J/g, '11')
        .replace(/T/g, '10')
);

const hands = Object.keys(games).map((hand, idx) => ({
    hand: hand,
    weight: parseInt(weightedHands[idx]),
    bet: parseInt(games[hand])
}));

hands.sort((a, b) => b.weight - a.weight);
console.log(JSON.stringify(hands));

total = hands.reduce((acc, val, idx) => acc + (val.bet * idx), 0)
console.log(total);