var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

function debounce(fun, wait) {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(fun(), wait);
    }
}

container.onmousemove = debounce(getUserAction,1000);
// container.onmousemove = getUserAction