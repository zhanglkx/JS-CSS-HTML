async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP 请求错误：${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(`无法获取产品列表：${error}`);
    }
}

const json = fetchProducts();
console.log(json[0].name);   // json 是一个 Promise 对象，因此这句代码无法正常工作
