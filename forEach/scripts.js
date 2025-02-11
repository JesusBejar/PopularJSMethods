const list = document.querySelector('#list')

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(num => {
    console.log(num)
    const numberDisplay = document.createElement('p')
    numberDisplay.innerHTML = `This is my number - ${num}`
    list.appendChild(numberDisplay)
});