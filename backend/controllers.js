
const Blogs = require('./blogSchema');

const get_blogs = (req,res)=>{
    Blogs.find()
    .then(result=>{
        res.render('index',{title: 'All Blogs', blogs: result});
    })
    .catch(err=>console.log(err))
}

module.exports = {
    get_blogs
}