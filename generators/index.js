//generators are special functions in javaScript
//that are paused and resumed
//allows us to control the execution flow

//Inside a generator function we use "yield" key to take a break and give a value
//Each time you call the generators they will execute from where it is last stopped & gives value

//Generator function

function* generatorFunction() {
  yield "hello";
  yield "world";
  yield "vijay kumar";
}

const generatorObject = generatorFunction();

for (let text of generatorObject) {
  console.log(text);
}
