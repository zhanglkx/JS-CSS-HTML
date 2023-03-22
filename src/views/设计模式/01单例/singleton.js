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

let Winner = new CreateSingleton('Winner');
let Looser = new CreateSingleton('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'
