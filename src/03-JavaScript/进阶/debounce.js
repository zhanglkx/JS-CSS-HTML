var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
    console.log(this) //window
};

// 第一版
function debounce1(func, wait) {
    var timeout;
    // console.log(this)  //window
    return function () {
        console.log(this)  //<div id="container">1</div>
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
        console.log(this) //<div id="container">1</div>
    }
}

// 第二版 解决this 指向
function debounce2(func, wait) {
    var timeout;
    console.log(this)  //window
    return function () {
        var context = this;
        // console.log(this)  //<div id="container">1</div>
        clearTimeout(timeout)
        timeout = setTimeout(function () { func.apply(context) }, wait);
    }
}

// 第三版 event 对象  如果我们不使用 debouce 函数，这里会打印 MouseEvent 对象，但是在我们实现的 debounce 函数中，却只会打印 undefined!
function debounce3(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function () { func.apply(context, args) }, wait);
    }
}

// V4立即执行
/*
 * 这个时候，代码已经很是完善了，但是为了让这个函数更加完善，我们接下来思考一个新的需求。这个需求就是：
我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
想想这个需求也是很有道理的嘛，那我们加个 immediate 参数判断是否是立刻执行。
 * @param {any} func 
 * @param {any} wait 
 * @param {any} immediate 
 * @returns 
* */
function debounce(func, wait, immediate) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);

        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () { timeout = null; }, wait)

            if (callNow) func.apply(context, args)

        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}


container.onmousemove = debounce(getUserAction, 1000);
// container.onmousemove = getUserAction