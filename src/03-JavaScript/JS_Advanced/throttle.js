// 第一版 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
function throttle1(func, wait) {
    var context, args;
    var previous = 0;

    return function () {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

// 第二版  设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
function throttle(func, wait) {
    var timeout;

    return function () {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
    }
}

var count = 1;
var container = document.getElementById('container');
container.onmousemove = throttle(getUserAction, 1000);