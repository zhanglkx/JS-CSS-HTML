// function foo() {
//     console.log(a);
//     a = 1;
// }

// // foo(); // ???

// function bar() {
//     a = 1;
//     console.log(a);
// }

// bar(); // ???
// console.log(a);





function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}

Foo.prototype.getName = function () {
    console.log(3);
};

function getName() {
    console.log(5);
};
Foo().getName()//3
// new Foo().getName()//3