/**
 * 基本的手写promise
 */
class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()

        try {
            // 执行传进来的函数
            executor(this.resolve, this.reject)
        } catch (e) {
            // 捕捉到错误直接执行reject
            this.reject(e)
        }
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }


    resolve(value) {
        if (this.PromiseState === 'pending') return;
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
        if (this.onFulfilledCallbacks.length) {
            //获取第一个元素，并执行传参this.PromiseState
            this.onFulfilledCallbacks.shift()(this.PromiseState)
        }
    }

    reject(reason) {
        if (this.PromiseState === 'pending') return;
        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason;
        if (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseState)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason
        };
        if (this.PromiseState === 'fulfilled') {
            onFulfilled(this.PromiseState)
        } else if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseState)
        } else if (this.PromiseState === 'pending') {
            // 如果状态为待定状态，暂时保存两个回调
            this.onFulfilledCallbacks.push(onFulfilled.bind(this))
            this.onRejectedCallbacks.push(onRejected.bind(this))
        }


    }

}

const test1 = new MyPromise((resolve, reject) => {
    resolve('success')
})
console.log(test1) // MyPromise { PromiseState: 'fulfilled', PromiseResult: 'success' }

const test2 = new MyPromise((resolve, reject) => {
    reject('fail')
})
console.log(test2) // MyPromise { PromiseState: 'rejected', PromiseResult: 'fail' }
