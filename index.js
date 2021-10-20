
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost.js')

const app = new express();

app.set('view engine', 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(express.static('public'));

app.get('/', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index')
})

app.get('/about', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about')
})

app.get('/contact', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
})

app.get('/post', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})

app.get('/post/new', (req, res)=>{
    res.render('create')
})

app.post('/post/new', (req, res)=>{
    console.log(req.body)
    res.render('/')
})

app.post('/post/store', (req, res)=>{
    BlogPost.create(req.body, (error, blogpost) => {
        res.render('/')
    })
})

app.listen(4000, ()=>{
    console.log('El app esta haciendo listening en el puerto 4000');
})