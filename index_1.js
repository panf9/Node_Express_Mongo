const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

BlogPost.create({
    title: 'Título 1',
    body:'Esto funcionará?'
})