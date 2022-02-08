const express=require('express')
const path  = require('path')

const app=express()

app.use(express.json())

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
    res.render('content',{title:'Email Template'})
})
app.get('/content2', function (req, res) {
    res.render('content2',{title:'Email Template'})
})
app.get('/content3', function (req, res) {
    res.render('content3',{title:'Email Template'})
})

app.listen(5000,()=>{
    console.log('running on port 5000')
})