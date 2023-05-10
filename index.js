require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const methodOverride = require('method-override')


//defines the view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))
app.use(methodOverride('_method'))


app.get('/', (req,res)=>{
    res.render('home')
})

const placessController = require('./controllers/places')
app.use('/places', placessController)

app.get('*', (req,res)=>{
    res.render('error404')
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;

