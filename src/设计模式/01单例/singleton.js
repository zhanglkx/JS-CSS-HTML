/**
 * 简单的单例
 */

let Singleton1 = function (name) {
    this.name = name;
    this.instance = null;
}

Singleton1.prototype.getName = function () {
    console.log(this.name);
}

Singleton1.getInstance = function (name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}

// let Winner = Singleton1.getInstance('Winner');
// let Looser = Singleton1.getInstance('Looser');
//
// console.log(Winner === Looser); // true
// console.log(Winner.getName());  // 'Winner'
// console.log(Looser.getName());  // 'Winner'

/**
 * 透明版本单例
 */
let CreateSingleton = (function () {
    let instance;
    return function (name) {
        if (instance) {
            return instance;
        }
        this.name = name;
        return instance = this;
    }
})();
CreateSingleton.prototype.getName = function () {
    console.log(this.name);
}

// let Winner = new CreateSingleton('Winner');
// let Looser = new CreateSingleton('Looser');
//
// console.log(Winner === Looser); // true
// console.log(Winner.getName());  // 'Winner'
// console.log(Looser.getName());  // 'Winner'
/**
 * 代理单例
 */
let ProxyCreateSingleton = (function () {
    let instance;
    return function (name) {
        // 代理函数仅作管控单例
        if (instance) {
            return instance;
        }
        return instance = new Singleton(name);
    }
})();

// 独立的Singleton类，处理对象实例
let Singleton = function (name) {
    this.name = name;
}
Singleton.prototype.getName = function () {
    console.log(this.name);
}

let Winner = new ProxyCreateSingleton('Winner');
let Looser = new ProxyCreateSingleton('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'

/**
 * 懒加载的单例
 */
let getSingleton = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments)); // 确定this上下文并传递参数
    }
}
let createAlertMessage = function (html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
}

let createSingleAlertMessage = getSingleton(createAlertMessage);
document.body.addEventListener('click', function () {
    // 多次点击只会产生一个弹窗
    let alertMessage = createSingleAlertMessage('您的知识需要付费充值！');
    alertMessage.style.display = 'block';
})
