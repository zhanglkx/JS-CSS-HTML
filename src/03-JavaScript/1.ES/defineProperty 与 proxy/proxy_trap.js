const obj = {
    name: "hhh",
    age: 18,
    height: 1.88
}

// 1.创建一个Proxy对象
const objProxy = new Proxy(obj, {
    set: function (target, key, newValue) {
        console.log(`监听: 监听${key}的设置值: `, newValue)
        target[key] = newValue
    },
    get: function (target, key) {
        console.log(`监听: 监听${key}的获取`)
        return target[key]
    },
    deleteProperty: function (target, key) {
        console.log(`监听: 监听删除${key}属性`)   //监听: 监听删除name属性
        delete obj.name
    },
    has: function (target, key) {
        console.log(`监听: 监听in判断 ${key}属性`)
        return key in target
    }
})

objProxy.name

objProxy.name = 1
obj.name = 1

delete objProxy.name
console.log("age" in objProxy)  //true
