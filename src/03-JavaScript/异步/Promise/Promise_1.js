let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  // resolve(1);
  reject(1);
});
/**
 * 这里成功的话就一致then执行下去，执行n多个then函数，因为我们只会在考虑成功的情况，使用catch函数统一捕捉错误
 */
promise.then(data => {
  console.log(data, "222");
}).catch(function(data) {
  console.log("error", data);
});

console.log("Hi!");
