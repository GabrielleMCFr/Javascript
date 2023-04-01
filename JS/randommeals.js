// randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      if (this._courses.appetizers.length > 0) {
        return this._courses.appetizers
      }
      else {
        return 'No appetizers are available.'
      }
    },
    set appetizers(newa) {
      if (newa.length > 0) {
        for (let i=0; i< newa.length; i++) {
            this._courses.appetizers.push(newa[i])
          }
      }
      else {
        console.log('The object must not be empty')
      }
    },
    get mains() {
      if (this._courses.mains.length > 0) {
        return this._courses.mains
      }
      else {
        return 'No main courses are available.'
      }
    },
    set mains(newm) {
      if (newm.length > 0) {
        for (let i=0; i< newm.length; i++) {
            this._courses.mains.push(newm[i])
          }
      }
      else {
        console.log('The object must not be empty')
      }
    },
    get desserts() {
      if (this._courses.desserts.length > 0) {
        return this._courses.desserts
      }
      else {
        return 'No desserts are available.'
      }
    },
    set desserts(newd) {
      if (newd.length > 0) {
        for (let i=0; i< newd.length; i++) {
            this._courses.desserts.push(newd[i])
          }
      }
      else {
        console.log('The object must not be empty')
      }
    },
    get courses() {
      return {
        appetizers: this.appetizers,  // this uses the appetizer getter method
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice,
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      const dishes = menu._courses[courseName]
      index = Math.floor(Math.random() * dishes.length)
      return dishes[index]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalprice = appetizer.price + main.price + dessert.price;
      return `Appetizer : ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name} for the total price of ${totalprice}.`
    }
  };
  
  
  // set menu
  let dlist = [{name: "Ice cream", price: 3.99}, {name: 'Pie', price: 5.99}, {name:'Apple', price: 1.50}]
  let mlist = [{name: 'Burger and fries', price:15.99}, {name:'Pizza', price:20.99},{name: 'Pasta', price: 19.99}, {name:'Lasagna', price:16.99}]
  let alist = [{name: 'Carrots', price:4.99}, {name:'Bread', price:1.99}, {name:'Soup', price:9.99}]
  
  // tests getters and setters
  menu.desserts = dlist
  //console.log(menu.desserts)
  menu.mains = mlist
  //console.log(menu.mains)
  //console.log(menu.appetizers)
  menu.appetizers = alist
  //console.log(menu.appetizers)
  
  menu.addDishToCourse('desserts', 'Strawberries', 4.99)
  //console.log(menu.courses)
  // test function
  //console.log(menu.getRandomDishFromCourse('mains'))
  
  // call random meal
  let meal = menu.generateRandomMeal();
  console.log(meal)
  
  