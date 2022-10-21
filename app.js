const getPokemon = () => {
    $.ajax("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((data) => {
        console.log(data)
    })
}

getPokemon()















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
