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

class Person {
  constructor(name, age, habit) {
    this.name = name;
    this.age = 15;
    this.habit = habit;
  }

  logInfo() {
    console.log("我是日志！");
  }


}

// const person = new Person("蜜雪冰城", 11, "喝奶茶");
const person = newOperator(Person, "蜜雪冰城", 11, "喝奶茶");
console.log(person.name);
console.log(person.age);
console.log(person.habit);
person.logInfo();

