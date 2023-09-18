function objectFactory() {
  const obj = new Object(), Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  return obj;
}

function add(a, b) {
  return a + b;
}

function add1(a, b) {
  return a + b;
}

module.exports = {
  objectFactory,
  add,
  add1
};
