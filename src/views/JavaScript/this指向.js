function sayHi() {
    console.log('Hello,', this.name)
}

let person2 = {
    name: '小万',
    sayHi: sayHi
}

let person1 = {
    name: '张三',
    friend: person2
}

person1.friend.sayHi() // Hello, 小万

//call bind
function getThisType() {
    console.log('this指向内容', this, typeof this)
}

getThisType.call(1) // this指向内容 Number {1} object
getThisType.apply('小万') // this指向内容 String {'小万'} object
getThisType.call(true) // this指向内容 Boolean {true} object
