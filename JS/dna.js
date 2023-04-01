// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(id, dna) {
    return {
      _specimenNum: id,
      _dna: dna,
      mutate() {
        // choisi une base au hasard
        let random = Math.floor(Math.random() * 15)
        let base = this._dna[random]
  
        // select randomly another base to make the mutation
        let tmp = returnRandBase()
        while (tmp === base) {
          tmp = returnRandBase()
        }
        this._dna[random] = tmp
      },
      compareDNA(other) {
        let count = 0
        for (let i = 0; i < this._dna.length; i++){
          if (other._dna[i] === this._dna[i]) {
            count+=1
          }
        }
        let percent = count/15*100
        console.log(`Les bestioles ${other._specimenNum} et ${this._specimenNum} ont ${percent}% d'ADN en commun.`)
      },
      willLikelySurvive() {
        let countC = 0
        let countG = 0
        for (let i = 0; i < this._dna.length; i++){
          if (this._dna[i] === 'G') {
            countG+=1
          }
          else if (this._dna[i] === 'C') {
            countC+=1
          }
        }
        let percentG = countG / 15 * 100;
        let percentC = countC / 15 * 100;
        if (percentG >= 60 || percentC >= 60) {
          return true
        }
        else {
          return false
        }
      }
    }
  }
  
  specimens = []
  // create 30 specimens
  for (let i = 0; i < 30; i++) {
    specimens.push(pAequorFactory(i, mockUpStrand()))
  }
  
  // TESTS 
  
  let b1 = specimens[0]
  let b2 = specimens[25]
  //console.log(b1)
  //b1.mutate()
  //console.log(b1)
  
  //b1.compareDNA(b2)
  
  console.log(b2.willLikelySurvive())
  
  
  
  