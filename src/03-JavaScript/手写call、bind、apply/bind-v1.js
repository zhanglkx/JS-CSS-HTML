// 第三版
Function.prototype.bind1 = function(context) {
  const self = this; //this 代表的是bar，调用 bind 的对象
  const args = Array.prototype.slice.call(arguments, 1);

  const fBound = function() {
    console.log(this); //作为构造函数时：this -> fBound，作为普通函数执行时，因为时 window 匿名调用的，只想 global
    const bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    // context 指向的是foo函数，就是 bind 函数的第一个参数
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
};

// 第四版
Function.prototype.bind2 = function(context) {

  const self = this; //this 代表的是
  const args = Array.prototype.slice.call(arguments, 1);

  const fNOP = function() {
  };

  const fBound = function() {
    const bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

const value = 2;

const foo = {
  value: 1
};

function bar(name, age) {
  this.habit = "shopping";
  console.log(this);
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin";

const bindFoo = bar.bind1(foo, "daisy");
bindFoo('18');
const obj = new bindFoo("18");
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
