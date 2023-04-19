require('dotenv').config()
const express= require('express')
const app = express()

//defines the view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))


app.get('/', (req,res)=>{
    res.render('home')
})

app.get('*', (req,res)=>{
    res.send('<h1>404 Error, unfortunately the page you are trying to access does not exisit</h1>')
})


app.listen(process.env.PORT)