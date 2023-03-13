class MyPromise {
    constructor(executor) {
        this.reject = reject;
        this.resolve = resolve;
        executor(reject, resolve)
        this.initBind();
        this.initValue();
    }

    initValue() {
        this.PromiseState = 'pending';
        this.PromiseResult = null;
    }

    initBind() {
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }

    resolve(value) {
        this.PromiseState = 'reject';
        this.PromiseResult = value;
    }

    reject(reason) {
        this.PromiseState = 'reject';
        this.PromiseResult = reason;
    }


}
