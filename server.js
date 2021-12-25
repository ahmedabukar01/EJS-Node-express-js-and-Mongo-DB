const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blogs = require('./backend/blogSchema');
const blogControll = require('./backend/controllers');
const blogRoutes = require('./backend/routes');

// middleware
app.set('view engine', 'ejs');
app.use(express.static('styles'));
app.use('/blogs',blogRoutes)
app.use(express.urlencoded({extended:true}));

const dbUrl = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/blogs?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
.then(result=>{
    app.listen('3000', ()=>{
        console.log('we are a live now!');
    });
})
.catch(err=>console.log(err));


app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.post('/blogs',(req,res)=>{
    console.log(req.body)
})

app.get('/about',blogControll.about_blog);