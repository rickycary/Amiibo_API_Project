$.ajax("https://amiiboapi.com/api/amiibo/")
.then((data) => {
    console.log(data)

    const amiibos = data.amiibo
    for(i=0; i<amiibos.length; i++) {
        console.log(amiibos[i])
    
    }
    function render(data){
        console.log(data)

    }

})