import { Router } from 'express';

import blogController from '../controllers/blogController';
import Blog from '../database/blogModel';
import Comment from '../database/commentModel';

const BlogRoutes = () => {
  const blogRouter = Router();
  const { getAllBlogs, getASingleBlog, updateABlog, postNewBlog, deleteABlog } =
    blogController;

  blogRouter.route('/').get(getAllBlogs).post(postNewBlog);

  blogRouter
    .route('/:blogId')
    .get(getASingleBlog)
    .patch(updateABlog)
    .delete(deleteABlog);

  blogRouter
    .route('/:blogId/likes')
    .post(async (req, res, next) => {
      const { blogId } = req.params;
      try {
        if (req.isAuthenticated()) {
          const foundBlog = await Blog.findOne({ _id: blogId });

          if (!foundBlog.likes.includes(req.user._id)) {
            foundBlog.likes.push(req.user._id);
            await foundBlog.save();
          }
          return res.json(foundBlog);
        } else {
          throw new Error('You Must Login To Perform This Operation.');
        }
      } catch (err) {
        next(err);
      }
    })
    .delete(async (req, res, next) => {
      const { blogId } = req.params;
      try {
        if (req.isAuthenticated()) {
          const foundBlog = await Blog.findOne({ _id: blogId });

          if (foundBlog.likes.includes(req.user._id)) {
            const indexLoc = foundBlog.likes.findIndex(
              (id) => id.toString() === req.user._id.toString()
            );
            foundBlog.likes.splice(indexLoc, 1);

            await foundBlog.save();
          }

          return res.status(200).json(foundBlog);
        } else {
          throw new Error('You Must Login To Perform This Operation.');
        }
      } catch (err) {
        next(err);
      }
    });

  blogRouter.route('/:blogId/comments').post(async (req, res, next) => {
    try {
      if (req.isAuthenticated()) {
        const foundBlog = await Blog.findOne({ _id: req.params.blogId });
        const newComment = new Comment({
          ...req.body,
          authorId: req.user._id,
          author: req.user.username,
          createdAt: new Date(),
          time: `
           ${new Date().getHours().toLocaleString()}: ${new Date()
            .getMinutes()
            .toLocaleString()}`,
        });
        foundBlog.comments.push(newComment);
        await foundBlog.save();
        return res.status(201).json(foundBlog);
      } else {
        throw new Error('You Must Login To Perform This Operation.');
      }
    } catch (err) {
      next(err);
    }
  });
  blogRouter
    .route('/:blogId/comments/:commentId')
    .delete(async (req, res, next) => {
      try {
        const { blogId, commentId } = req.params;
        if (req.isAuthenticated()) {
          const foundBlog = await Blog.findOne({ _id: blogId });
          const { comments } = foundBlog;
          const commentToDelete = comments.find(
            (c) => c._id.toString() === commentId.toString()
          );
          if (commentToDelete) {
            if (
              commentToDelete.authorId.toString() === req.user._id.toString()
            ) {
              const filteredComments = comments.filter(
                (co) => co._id.toString() !== commentId.toString()
              );
              foundBlog.comments = filteredComments;
              await foundBlog.save();
              return res.status(200).json(foundBlog);
            } else {
              throw new Error('You Are Not Authorized Perform This Operation.');
            }
          }
        } else {
          throw new Error('You Must Login To Perform This Operation.');
        }
      } catch (err) {
        next(err);
      }
    });

  return blogRouter;
};

export default BlogRoutes;
