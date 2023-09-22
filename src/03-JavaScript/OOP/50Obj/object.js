// 在JavaScript中，对象比较是引用比较，而不是值比较。{}创建的是一个新的空对象，所以即使两个对象看起来是相同的，但它们在内存中的地址是不同的，所以它们不相等。
console.log({} == {});
console.log({} === {});
