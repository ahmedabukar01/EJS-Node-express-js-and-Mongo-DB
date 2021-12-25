
const Blogs = require('./blogSchema');

// get blogs
const get_blogs = (req,res)=>{
    Blogs.find()
    .then(result=>{
        res.render('index',{title: 'All Blogs', blogs: result});
    })
    .catch(err=>console.log(err))
}

// about
const about_blog = (req,res)=>{
    res.render('about',{title:'About US'});
}

// create blog
const create_blog = (req,res)=>{
    res.render('create_blog',{title: 'Create New Blog',});
}
// create post blog
const create_post_blog = (req,res)=>{
    console.log(req.body);
}
// exports
module.exports = {
    get_blogs,
    about_blog,
    create_blog,
    create_post_blog
}