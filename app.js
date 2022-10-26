// Link to api webstie
// https://amiiboapi.com/


// Base URL
const baseURL = 'https://www.amiiboapi.com/api'


//====================================================================
// Function that does the Amiibo search
function getAmiibo(title){
// Used baseURL and inserted ${title} for character
    const url = $.ajax(`${baseURL}/amiibo/?name=${title}`)

// Makes our request 
    .then((amiibo) => {
        console.log(amiibo)

        const $main = $('main')
        $main.empty()

// Information to translate to the page from the API
        $main.html(`
        <h1>Character Name: ${amiibo.amiibo[0].name}</h1>
        <img src="${amiibo.amiibo[0].image}">
        <h3>Game Series: ${amiibo.amiibo[0].gameSeries}</h3>
        <h3>Amiibo Series: ${amiibo.amiibo[0].amiiboSeries}</h3>
        `)
    })
}
//====================================================================


// Put a click event on the submit button
$("input[type=submit]").on("click", event => {


// Button to prevent refresh
    event.preventDefault()


// Gives input text value
    const inputText = $("input[type=text]").val()


// Call to place input text
    getAmiibo(inputText)
})

// Call for character to appear on screen 
getAmiibo(' ')



