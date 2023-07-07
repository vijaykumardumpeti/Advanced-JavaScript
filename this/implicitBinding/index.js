//implicit - binding;

let profile = {
  name: "vijaykumar",
  sayMyName: function () {
    console.log(`meraaa name is ${this.name}`);
  },
};
profile.sayMyName();

// export default profile;
