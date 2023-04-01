function eggDrop(eggs, floors){
    // Write your code here
    // CREATE ARRAY TO STORE SUBPROBLEMS RESULTS
    let eggFloor = new Array(eggs + 1);
    for(let i=0;i<(eggs+1);i++)
      {
        // ex ici, étages 0 à 100
        eggFloor[i]=new Array(floors+1);
      }
      let result;
      let e, f, x;
    
      // We need one trial for one floor and
      // 0 trials for 0 floors
      for (e = 1; e <= eggs; e++) {
          eggFloor[e][1] = 1;
          eggFloor[e][0] = 0;
        }
      
      // we need nb of floors trials if one egg left to be sure to get the threshold
      for (f = 1; f <= floors; f++) {
        eggFloor[1][f] = f;
      }
    
    // Fill rest of the entries in table using
    // optimal substructure property
    // we start counting from two since we covered the case of f floors = 1 or 0 and e eggs = 1
    for (e = 2; e <= eggs; e++) {
      // x is the optimal floor
      let x = 1
      for (f = 2; f <= floors; f++) {
        eggFloor[e][f] = Number.MAX_VALUE; // aka infinity
        while (x < f+1 && eggFloor[e][f-x] > eggFloor[e-1][x-1]) {
          x += 1
        }
        eggFloor[e][f] = 1 + eggFloor[e-1][x-1]
      }
    }
    return eggFloor[eggs][floors]
  }
  
  console.log(eggDrop(2, 100));
  
  // Leave this here so we can test your code
  module.exports = eggDrop;