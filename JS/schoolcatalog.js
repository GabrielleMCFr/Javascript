class School {
    constructor(name, level, numberOfStudents) {
      this._name= name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(nb) {
      if (typeof nb === 'number') {
        this._numberOfStudents = nb;
      }
      else {
        console.log('You must pass a number.')
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      let num = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[num]
    }
  };
  
  
  class Primary extends School {
    constructor(name, level, numberOfStudents, pickUpPolicy) {
      super(name, level, numberOfStudents);
      this._pickUpPolicy = pickUpPolicy
    }
  };
  
  
  class Middle extends School {
    constructor(name, level, numberOfStudents) {
      super(name, level, numberOfStudents);
    }
  };
  
  
  class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
      super(name, level, numberOfStudents);
      this._sportsTeams = sportsTeams
    }
  
    get sportsTeams() {
      return this._sportsTeams
    }
  }
  
  // tests 
  const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  
  let substeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(substeacher);
  
  const alSmith = new High('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams)
  