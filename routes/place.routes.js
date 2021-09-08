const router = require('express').Router()

const Place = require('../models/Place-model')

//Mostrar todos
router.get('/establecimientos', (req, res) => {
    
    Place
    .find()
    .then(place => {
        console.log("que esta pasando? ", place)
        res.render('places/list-place', { place })})
    .catch(err => console.log(err))

});

//Crear un establecimiento
router.get('/crear', (req,res) => {
    // res.send("hola buenas")
    res.render('places/create-place')
})

router.post('/crear', (req,res) => {

    const {name, type, lat, lng} = req.body

    let location = { 
        type: 'Point',
        coordinates: [lat, lng]
    }
    console.log({name, type})
    Place
    .create({name, type, location})
    .then(() => res.redirect('/establecimientos'))
    .catch(err => console.log(err))

})

//Informacion de las Librerias

router.get('/establecimientos/detalles/:id', (req, res) => {

    const { id } = req.params

    Place
    .findById(id)
    .then(place => {
        console.log("que estsa pasando? ", place)
        res.render('places/details-place',  place )})
    .catch(err => console.log(err))

});

//Eliminar librerias
router.post('/establecimientos/detalles/:id/borrar', (req,res)=> {

    const {id} = req.params
    
    Place
    .findByIdAndDelete(id)
    .then(() => res.redirect(`/`))
    .catch(err => console.log('Hubo un error:', err))

})  





module.exports = router;

