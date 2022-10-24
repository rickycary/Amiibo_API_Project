// https://amiiboapi.com/

const baseURL = 'https://www.amiiboapi.com/api'


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
        <h1>Character Name: ${amiibo.amiibo[0].gameSeries}</h1>
        <h1>Character Name: ${amiibo.amiibo[0].amiiboSeries}</h1>
        <h1>Character Name: ${amiibo.amiibo[0].release.na}</h1>



        `)
    })
}

// Put a click event on the submit button
$("input[type=submit]").on("click", (event) => {

    event.preventDefault() // Prevents refresh

    const inputText = $("input=[type=text]").val()
    
    getAmiibo(inputText)
})


getAmiibo('Mario')















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
