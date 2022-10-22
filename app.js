// https://amiiboapi.com/

const baseURL = 'https://www.amiiboapi.com/api/'


// Function that does the Pokedex search
function getAmiibo(name){
    const url = `${baseURL}amiibo/`

// Make our request
    $.ajax(url).then((amiibo) => {
        console.log(amiibo)

// Render the data
        // const $main = $('main')
        // $main.empty()

        // $main.html(`
        // <h1>${m.results.name}`)
    })

}





getAmiibo()















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
