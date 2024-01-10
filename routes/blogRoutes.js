import { Router } from 'express';

import blogController from '../controllers/blogController';

const BlogRoutes = () => {
  const blogRouter = Router();
  const {
    getAllBlogs,
    getASingleBlog,
    updateABlog,
    postNewBlog,
    deleteABlog,
    getABlogMiddleware,
    likeABlog,
    deleteLike,
    leaveAComment,
    deleteAComment,
  } = blogController;

  blogRouter.route('/').get(getAllBlogs).post(postNewBlog);

  blogRouter
    .route('/:blogId')
    .all(getABlogMiddleware)
    .get(getASingleBlog)
    .patch(updateABlog)
    .delete(deleteABlog);

  blogRouter
    .route('/:blogId/likes')
    .all(getABlogMiddleware)
    .post(likeABlog)
    .delete(deleteLike);

  blogRouter
    .route('/:blogId/comments')
    .all(getABlogMiddleware)
    .post(leaveAComment);
  blogRouter
    .route('/:blogId/comments/:commentId')
    .all(getABlogMiddleware)
    .delete(deleteAComment);

  return blogRouter;
};

export default BlogRoutes;
