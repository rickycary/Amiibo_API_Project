const baseURL = 'https://amiiboapi.com/'

const addSquare = (randomAmiibo) => {
    const square = document.createElement('div')
    square.classList.add('square')
    square.innerHTML = `<h4>${randomAmiibo}</h4>`
    const container = document.querySelector(".amiiboContainer")
    container.append(square)
}

const getRandomAmiibo = (random) => {
    $.ajax(`${baseURL}/api/amiibo/`)
.then((data) => {
    // console.log(data)
    console.log(data.amiibo[0].character)
    addSquare(data.amiibo[0].character)
    addSquare(data.amiibo[99].character)

})
}

getRandomAmiibo()
const button = document.querySelector("button")
button.addEventListener("click", getRandomAmiibo)

