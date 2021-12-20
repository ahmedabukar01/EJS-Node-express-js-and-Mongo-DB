
const Blogs = require('./blogSchema');

// get blogs
const get_blogs = (req,res)=>{
    Blogs.find()
    .then(result=>{
        res.render('index',{title: 'All Blogs', blogs: result});
    })
    .catch(err=>console.log(err))
}

//
const about_blog = (req,res)=>{
    res.render('about',{title:'About US'});
}

module.exports = {
    get_blogs,
    about_blog
}