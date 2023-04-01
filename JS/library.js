const catalog = []

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    if (this._ratings.length > 0) {
      return this._ratings;
    }
    else {
      return 'No ratings yet.';
    }
  }

  set isCheckout(b) {
    if (b === true || b === false) {
      this._isCheckout = b;
    }
    else {
      console.log('You have to pass a boolean value to the function, genius.')
    }
  }

  getAverageRating() {
    if (this._ratings) {
      let average = (this._ratings.reduce((currentSum, rating) => currentSum + rating, 0))/this._ratings.length;
      return average;
    }
    else {
      return 'No ratings yet, average impossible to do.';
    }
  }

  addRating(newrating) {
    if (typeof newrating === 'number' && newrating >= 0 && newrating <= 5) {
      this._ratings.push(newrating)
    }
    else 
    {
      console.log('Invalid rating.')
    }
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    }
    else if (!this._isCheckedOut) {
      this._isCheckedOut = true;
    }
  }
}

class Book extends Media {
  // I guess I could make conditions to make sure its valid data
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    catalog.push({title: title, type: 'book'})
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    catalog.push({title: title, type: 'movie'})
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this.runTime;
  }
}

class CD extends Media {
  constructor(title, singer, songs) {
    super(title);
    this._singer = singer;
    this._songs = songs;
    catalog.push({title: title, type: 'cd'})
  }
  get singer() {
    return this._singer
  }
  get songs() {
    return this._songs
  }
  shuffle() {
    let copy = [...this._songs]
    for (var i = copy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
  }
}



//tests
let book = new Media('try')
console.log(book.ratings)
book.addRating(9)
book.addRating(7)
console.log(book.ratings)
console.log(book.getAverageRating())


let historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


let cd = new CD('try', 'fif', ['foo', 'bar', 'baz', 'b', 'c'])
let s = cd.shuffle()
console.log(s)
console.log(cd.songs)

console.log(catalog)