// V1 双层for循环
let array = [1, 1, 2, '1', '2'];


function unique(array) {

    let res = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < res.length - i; j++) {
            if (array[i] === res[i]) {
                break
            }
            res.push[array[i]]
        }
    }
    return res
}