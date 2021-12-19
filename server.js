const express = require('express');
const app = express();

app.listen('3000', ()=>{
    console.log('we are a live now!');
});

app.get('/',(req,res)=>{
    res.send('<h1> hey how are you doing ?</h1>')
})
