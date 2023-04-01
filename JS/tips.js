// turn an array to dechrono order
const sortYears = arr => arr.sort((x, y) => y - x);


// return an array of a list of values presents in first and second array
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))



// sort by number of teeths
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)