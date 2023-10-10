async function async1() {
    console.log(1)
    await async2()
    console.log(2)
}

const async2 = async () => {
    await setTimeout((_) => {
        Promise.resolve().then((_) => {
            console.log(3)
        })
        console.log(4)
    }, 0)
}

const async3 = async () => {
    Promise.resolve().then(() => {
        console.log(6)
    })
}

async1()

console.log(7)

async3()