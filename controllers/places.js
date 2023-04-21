const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg'
  }]

router.get('/', (req,res)=>{
    res.render('places/index', {places})
})
 

module.exports=router