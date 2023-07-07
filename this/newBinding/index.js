new binding();

function Person(name, age) {
  //this = {}
  this.name = name;
  this.age = age;

  this.sayMyName = function () {
    console.log(`My name is ${this.name}`);
  };
}

const person1 = new Person("VIJAYKUMAR", 23);
console.log(person1);
person1.sayMyName();
