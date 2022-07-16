class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    // getters
    get title(){
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    // isCheckout setter
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    get ratings(){
      return this._ratings;
    }
  
  // method to negate the value saved to a boolean.
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  // return reduced ratings result 
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length;  
    }

  // add rating method
  addRating(input) {
    this.ratings.push(input);
  }
} // **** end class ****

  // Book Class extends Media
  class Book extends Media {
    constructor(author, title, pages) {
      super (title)
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  
  } // **** end Book class ****
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super (title)
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  
  } // **** end Movie class ****

    // book instance with properties
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
    // Movie instance
    const speed = new Movie('Jan de Bont', 'Speed', 16);

    speed.toggleCheckOutStatus();

    // new instance
    historyOfEverything.toggleCheckOutStatus();
  
    // log the saved value
    console.log(historyOfEverything.isCheckedOut);
  
    // invoke add Rading on HistoryofEverything
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
  
    console.log(historyOfEverything.getAverageRating());
    console.log(speed.isCheckedOut);

    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);

    console.log(speed.getAverageRating());