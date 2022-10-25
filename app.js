// Link to api webstie
// https://amiiboapi.com/

// Base URL
const baseURL = 'https://www.amiiboapi.com/api'

//====================================================================
// Function that does the Pokedex search
function getAmiibo(title){
    const url = $.ajax(`${baseURL}/amiibo/?name=${title}`)

// Make our request 
    .then((amiibo) => {
        console.log(amiibo)

        const $main = $('main')
        $main.empty()

        $main.html(`
        <h1>Character Name: ${amiibo.amiibo[0].name}</h1>
        <img src="${amiibo.amiibo[0].image}">
        <h3>Game Series: ${amiibo.amiibo[0].gameSeries}</h3>
        <h3>Amiibo Series: ${amiibo.amiibo[0].amiiboSeries}</h3>
        `)
    })
}
//====================================================================



//====================================================================
// Random Amiibo Function
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
//====================================================================

// Put a click event on the submit button
$("input[type=submit]").on("click", event => {

    event.preventDefault()

    const inputText = $("input[type=text]").val()

    getAmiibo(inputText)
})


getAmiibo('link')















// $.ajax('https://pokeapi.co/api/v2/pokemon/')
// .then((data) => {
//     console.log(data)
//     console.log(data.results[0])
// })

// const name = document.querySelector("pokemonName").value

// $.ajax('https://pokeapi.co/api/v2/pokemon/${name}')
// .then((data) => {
//     console.log('charmander')
//     // console.log(data.results)
// })
