const obj = {}, value = null;


// Object.defineProperty(obj, "num", {
//     value : 1,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });

// console.log('1',obj);


Object.defineProperty(obj, "num", {

  get: function() {
    console.log("execute get");
    return value;
  },
  set: function(newValue) {
    console.log("execute set");
    value = newValue;
  }
});

obj.num = 1;
console.log(obj.num);
