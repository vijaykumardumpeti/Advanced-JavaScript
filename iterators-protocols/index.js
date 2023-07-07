//iterator protocol
//considering an object which is not a built in iterator
//the object to be an iterable it must have method with [Symbol.iterator] key and this method
// cannot access any argument and return an object which conforms to the iterator protocol
//iterator protocol decides whether the object is iterable or not
//the object must have the next() method which return an object with two properties that are
//value & done(boolean value)
//value: represents current element
//done: represents whether there is any more elements or not for iterating
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "world", done: false };
        } else if (step === 3) {
          return { value: "hi", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (let text of obj) {
  console.log(text);
}
