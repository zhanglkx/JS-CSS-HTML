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
        console.log(this)  //<div id="container">1</div>
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(context)
        }, wait);
    }
}

// 第三版 event 对象  如果我们不使用 debouce 函数，这里会打印 MouseEvent 对象，但是在我们实现的 debounce 函数中，却只会打印 undefined!
function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}


container.onmousemove = debounce(getUserAction, 1000);
// container.onmousemove = getUserAction