array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const compound = array.reduce((sum, num) => {
    return sum + num
}, 0)

console.log(compound)