//Explicit binding

// import profile from "../../this/implicitBinding";

let profile = {
  name: "vijaykumar",
  sayMyName: function () {
    console.log(`meraaa name is ${this.name}`);
  },
};

function sayMyName() {
  console.log(`my name is ${this.name}`);
}

sayMyName.call(profile);
