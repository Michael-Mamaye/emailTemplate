const express=require('express')
const path  = require('path')

const app=express()

app.use(express.json())

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
    res.render('orderConfirmation',{title:'Order Confirmation'})
})
app.get('/newOrder', function (req, res) {
    res.render('newOrder',{title:'New Order'})
})
app.get('/orderComplete', function (req, res) {
    res.render('orderComplete',{title:'Order Complete'})
})
app.get('/activation', function (req, res) {
    res.render('activation',{title:'Activation Required'})
})
app.get('/passwordReset', function (req, res) {
    res.render('passwordReset',{title:'Password Reset'})
})
app.get('/linkPublished', function (req, res) {
    res.render('linkPublished',{title:'Link Published'})
})

app.listen(5000,()=>{
    console.log('running on port 5000')
})