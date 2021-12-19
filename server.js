const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.set('view engine', 'ejs');
app.use(express.static('styles'));

// const dbUrl = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/blogs?retryWrites=true&w=majority';

// mongoose.connect(dbUrl)
// .then(result=>{
//     app.listen('3000', ()=>{
//         console.log('we are a live now!');
//     });
// })
// .catch(err=>console.log(err));

app.listen('3000', ()=>{
    console.log('we are a live now!');
});

app.get('/',(req,res)=>{
    res.render('index', {title: 'All Blogs'});
})
