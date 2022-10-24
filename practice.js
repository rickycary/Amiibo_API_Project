const addSquare = (randomAmiibo) => {
    const square = document.createElement('div')
    square.classList.add('square')
    square.innerHTML = `<h4>${randomAmiibo}</h4>`
    const container = document.querySelector(".amiiboContainer")
    container.append(square)
}

const getRandomAmiibo = () => {
    $.ajax("https://www.amiiboapi.com/api/amiibo/")
.then((data) => {
    console.log(data)
    console.log(data.amiibo[0].character)
    addSquare(data.amiibo[0].character)
    addSquare(data.amiibo[99].character)

})
}

getRandomAmiibo()
const button = document.querySelector("button")
button.addEventListener("click", getRandomAmiibo)

