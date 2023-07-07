function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

//below method can be added to this-object
Person.prototype.getFullName = function () {
  console.log(`Full Name is ${this.firstName} ${this.lastName}`);
};

const person1 = new Person("vijay", "dumpeti");
//below method can be add to only person1-object
person1.getDetails = function () {
  console.log("He is small brother");
};

person1.getFullName();
person1.getDetails();

const person2 = new Person("sathish", "dumpeti");
person2.getFullName();
// person2.getDetails();
