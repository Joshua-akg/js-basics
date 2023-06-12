// This is the first comment
console.log("Hello Integrated Console World");

const name = "Joshua";
console.log(name);

var person = {
    name: "Joshua",
    lName: "Bautista",
    age: 22,
};
console.log(person);

let preferredBasics = ["HTML", "CSS", "JavaScript"];
console.log(preferredBasics);

greet(person.name, person.lName);

function greet(name, lName) {
    console.log("Hello " + name+ " " + lName);
}