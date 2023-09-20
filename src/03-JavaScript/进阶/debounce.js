var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
    console.log(this) //window
};

// 第一版
function debounce(func, wait) {
    var timeout;
    console.log(this)  //window
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
        console.log(this) //<div id="container">1</div>
    }
}

container.onmousemove = debounce(getUserAction, 1000);
// container.onmousemove = getUserAction