// $.ajax('https://pokeapi.co/api/v2/pokemon/')
// .then((data) => {
//     console.log(data)
//     console.log(data.results[0])
// })

$.ajax('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
.then((data) => {
    console.log(data)
    console.log(data.results[3])
    console.log(data.results[4])
    console.log(data.results[5])
})