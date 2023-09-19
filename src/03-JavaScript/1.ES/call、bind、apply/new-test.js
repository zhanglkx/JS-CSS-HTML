// import {objectFactory} from "@/03-JavaScript/1.ES/call、bind、apply/new-1";
const { objectFactory, objectFactory1, _new, newOperator } = require("./new-1");

function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = "Games";
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
  console.log("I am " + this.name);
};


// const person = objectFactory1(Otaku, "Kevin", "18");
//
// console.log(person.name); // Kevin
// console.log(person.habit); // Games
// console.log(person.strength); // 60
//
// person.sayYourName(); // I am Kevin



