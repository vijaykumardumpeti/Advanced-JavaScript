//prototypal inheritance

//constructor function
//parent
function Person(fName, lName) {
  //this = {}
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.sayMyName = function () {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
};

// const p1 = new Person("vijay", "kumar");
// console.log(p1.firstName);
// p1.sayMyName();

//child

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  //this = {}
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("fighting against crime");
};

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

const p1 = new SuperHero("vijay", "kumar");
p1.sayMyName();
