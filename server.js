const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blogs = require('./backend/blogSchema');

// middleware
app.set('view engine', 'ejs');
app.use(express.static('styles'));

const dbUrl = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/blogs?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
.then(result=>{
    app.listen('3000', ()=>{
        console.log('we are a live now!');
    });
})
.catch(err=>console.log(err));


app.get('/',(req,res)=>{
    const blogs = [
        {title: 'hey how about us and who you are all', snippet: 'this is mern stack and things become easy'},
        {title: 'hey how about us and who you are all', snippet: 'this is mern stack and things become easy'},
        {title: 'hey how about us and who you are all', snippet: 'this is mern stack and things become easy'}
    ]
    res.render('index', {title: 'All Blogs', blogs});
})

app.get('/blogs', (req,res)=>{
    const data = new Blogs({
        title: 'how are you doing',
        snippet: 'hyeeeeeeeet',
        body: 'wooooooow'
    });

    data.save()
    .then(result=>{
        console.log('data has been saved :)');
        res.send(result)
    })
    .catch(err=>console.log(err))
})
