// code your solution here
// ✓ returns a year the Denver Broncos won the superbowl
// ✓ returns undefined if the record has no win objects

function superbowlWin(record){
    const wins = record.find(record => record.result === 'W');
    console.log (wins);
    if (wins){
        return (`${wins.year}`);
    }
}