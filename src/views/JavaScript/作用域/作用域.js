// 函数作为参数被传递
function print(fb) {
    const b = 200;
    fb();
}

const b = 100;

function fb() {
    console.log(b);
}

print(fb); // 100
