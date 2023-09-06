const {Router} = require('express');

const blogs = require('../blogs/blogs')
const log = console.log;

module.exports = function blogsRouter(){

    const blogsRouter = Router();

    
    blogsRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.json(blogs);
    })
    .post((req, res) => {
        const {title, content, author} = req.body;
        const newBlogPost = {
            id: blogs.length + 1,
            title,
            content,
            author,
            date: new Date()
        }
        blogs.push(newBlogPost);
        log(blogs)
        res.status(201);
        return res.json(newBlogPost);
    })

    blogsRouter.route('/:id')
    .get( (req, res) => {
        const {id} = req.params;
        const blog = blogs.find(post => post.id === +id);
        
        if (!blog) {
            res.status(404);
            return res.json({message: 'Blog Not Found!'})
        } else {
            res.status(200);
            return res.json(blog)
        }
    })
    .patch((req, res) => {
        const blog = blogs.find(blog => blog.id === +req.params.id);
        log(req.params.id)
        log(blog)
        if (!blog) {
            res.status(404)
            return res.json({message: 'Blog Not Found!'})
        }
        const updatedBlog = Object.assign({}, blog, req.body)
        blogs.push(updatedBlog);
        res.status(201);
        return res.json(updatedBlog);
    })
    .delete((req, res) => {
        
            const blogIndex = blogs.findIndex(blog => blog.id === +req.params.id);
            if (blogIndex !== -1) {
                blogs.splice(blogIndex, 1);
                res.status(200);
                return res.json({message: 'Blog Deleted Successfully.'});
            }
            res.status(404);
            return res.json({message: 'Blog Not Found!'})

       
    })

    return blogsRouter;
}