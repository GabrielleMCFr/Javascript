// ex: filter player of an array with currying (pas tout d'un coup, invoquant function qui invoque une fonction etc, closures style)



const players = [
    { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
    { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
    { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
    { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
    { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
    { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
    { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
    { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]


const setFilter = array => key => value => array.filter(x => x[key] === value);
const filterPlayers = setFilter(players);
const filterPlayersByCity = filterPlayers('city');
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco');
const filterPlayersBySport = filterPlayers('sport');
const filteredPlayersBySoccer = filterPlayersBySport('soccer');
 
console.log(filteredPlayersBySanFrancisco); // Returns an array of players from San Francisco
console.log(filteredPlayersBySoccer); // Returns an array of players that play soccer



// sort by date

const sortArrayByValue = sortArray => sortKey => {
    return sortArray.sort(function(a, b){
        if(a[sortKey] < b[sortKey]) { return -1; }
        if(a[sortKey] > b[sortKey]) { return 1; }
        return 0;
    });
}
 
const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco);
const sortSFByDateJoined = sortSanFrancisco("dateJoined");
console.log(sortSFByDateJoined);