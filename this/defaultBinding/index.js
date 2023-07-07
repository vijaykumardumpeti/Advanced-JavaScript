//THIS-implicit-binding, explicit-binding, new-binding, default-binding

//default binding

globalThis.name = "kaka";

function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName();
