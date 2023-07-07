class Person {
  constructor(fName, lName) {
    //this = {}
    this.firstName = fName;
    this.lastName = lName;
  }

  sayMyName() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
}

// const p1 = new Person("vijay", "kumar");
// p1.sayMyName();

class SuperHero extends Person {
  constructor(fName, lName) {
    //this = {}
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fight crime");
  }
}

const superhero1 = new SuperHero("vijay", "kumar");
superhero1.sayMyName();
superhero1.fightCrime();
console.log(superhero1.isSuperHero);
