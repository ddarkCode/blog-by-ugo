const {Router} = require('express')


const Blog = require('../database/blogModel')
const formatDate = require('../utils/formatDate')

const log = console.log;


const BlogRoutes = () => {
    const blogRouter = Router();

    blogRouter.route('/')
    .get(async (req, res) => {
        try {
            const blogs = await Blog.find({});
            res.status(200);
            return res.render('index', {blogs});
        } catch (error) {
            res.status(500);
            return res.redirect('/');
        }
    })

    blogRouter.route('/blogs/compose')
    .get((req, res) => {
        res.status(200);
        return res.render('compose');
    })
    .post(async (req, res) => {
        const {title, description, author, content} = req.body;

        try {
            const newBlog = new Blog({
                title, content, description, author
            })
            await newBlog.save();
            res.status(201);
            return res.redirect('/');
        } catch (error) {
            res.status(500);
            return res.json({message: 'An Error Occurred While Saving Your Blog.', error});
        }
    })

    blogRouter.route('/blogs/:blogId')
    .get(async (req, res) => {
        const {blogId} = req.params;
        try {
           const foundBlog = await Blog.findOne({_id: blogId})
           foundBlog.date = formatDate(foundBlog.createdAt);
           log(foundBlog)
           res.status(200);
           return res.render('post', {foundBlog})
        } catch (error) {
            res.status(500);
            return res.json({message: 'Internal Server error', error});
        }
    })
    .delete(async (req, res) => {
        const {blogId} = req.params;
        try {
            await Blog.findByIdAndDelete(blogId);
            res.status(200);
            return res.redirect('/');
        } catch (error) {
            
        }
    })

    return blogRouter;
}

module.exports = BlogRoutes;
