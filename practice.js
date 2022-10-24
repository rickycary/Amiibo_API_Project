$.ajax("https://www.amiiboapi.com/api/amiibo/")
.then((data) => {
    console.log(data)
    console.log(data.amiibo[0].character)
})

