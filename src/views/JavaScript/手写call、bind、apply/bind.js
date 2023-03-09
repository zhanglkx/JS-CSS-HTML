// 第二版
// Function.prototype.bind2 = function (context) {
//
//     var self = this;
//     // 获取bind2函数从第二个参数到最后一个参数
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     return function () {
//         // 这个时候的arguments是指bind返回的函数传入的参数
//         var bindArgs = Array.prototype.slice.call(arguments);
//         console.log(this, self);
//         return self.apply(context, args.concat(bindArgs));
//     }
// }
//
// var foo = {
//     value: 1
// };
//
// function bar(name, age) {
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
//
// }
//
// var bindFoo = bar.bind2(foo, 'daisy');
// bindFoo('18');
//========================
// 第四版
var value = 2;
var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

Function.prototype.bind2 = function (context) {

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {
    };

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;//这里的this是bar
    fBound.prototype = new fNOP();//this !== 也!= fNOP
    return fBound;
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin


