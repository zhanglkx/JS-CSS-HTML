/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
    const resArr = [];
    functions.forEach((fn, i) => {
      // promise函数也是函数，执行也是fn()，切记
      fn().then(res => {
        resArr[i] = res;
        if (i === functions.length-1) {
          resolve(resArr);
        }
      }).catch(reject);
    });
  });
};


const promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]

