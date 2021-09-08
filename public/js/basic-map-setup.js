function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 12,
            center: directions.ironhackBCN.coords,
            styles: mapStyles.silver
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title
    })

    //getPlaces(myMap)
}

function getPlaces(map) {

    axios
        .get('/api/places')
        .then(response => printPlaces(response.data, map))
        .catch(err => console.log(err))
}


function printPlaces(places, map) {

    places.forEach(elm => {

        let position = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({ map, position, title: elm.name })
    })
}
