// 第一版
Function.prototype.call2 = function (context) {//context=obj是因为仅接受了第一个参数
    var context = context || window;
    context.fn = this;

    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)

    delete context.fn
    return result
}

// 测试一下
// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar() {
    console.log(this.value);
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
