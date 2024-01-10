import debug from 'debug';

import Blog from '../database/blogModel';
import User from '../database/user';
import CustomError from '../middlewares/CustomError';
import Comment from '../database/commentModel';

const log = debug('index:blogController');

export default (function blogController() {
  return {
    getAllBlogs: async (req, res, next) => {
      try {
        let blogs = await Blog.find({});
        blogs = blogs.reverse();
        const setOfAuthorIds = new Set();
        blogs.forEach((blog) => {
          setOfAuthorIds.add(blog.authorId);
        });

        const authorInfoPromise = [...setOfAuthorIds].map(async (authorId) => {
          return await User.findOne({ _id: authorId });
        });

        Promise.all(authorInfoPromise)
          .then((returnedAuthorInfo) => {
            const blogMappedToAuthors = [];
            for (let i = 0; i < blogs.length; i += 1) {
              for (let j = 0; j < returnedAuthorInfo.length; j += 1) {
                if (
                  blogs[i].authorId.toString() ===
                  returnedAuthorInfo[j]._id.toString()
                ) {
                  const { email, username } = returnedAuthorInfo[j];
                  blogMappedToAuthors.push(
                    Object.assign({}, blogs[i]._doc, {
                      email,
                      username,
                    })
                  );
                }
              }
            }

            return res.status(200).json(blogMappedToAuthors);
          })
          .catch((err) => {
            next(err);
          });
      } catch (err) {
        next(err);
      }
    },
    postNewBlog: async (req, res, next) => {
      const { title, description, para1, para2, para3 } = req.body;

      try {
        if (req.isAuthenticated()) {
          const { email, username, _id } = req.user;
          const newBlog = await Blog.create({
            title,
            description,
            para1,
            para2,
            para3,
            authorId: _id,
          });
          return res
            .status(201)
            .json(Object.assign({}, newBlog._doc, { email, username }));
        } else {
          throw new CustomError('You Must Login To Post A Blog.', 403);
        }
      } catch (err) {
        next(err);
      }
    },
    getABlogMiddleware: async (req, res, next) => {
      const { blogId } = req.params;
      try {
        const foundBlog = await Blog.findById(blogId);

        if (!foundBlog) {
          throw new CustomError('Blog Not Found!', 404);
        }
        const { username, email } = await User.findOne({
          _id: foundBlog.authorId,
        });
        req.foundBlog = Object.assign({}, foundBlog._doc, {
          username,
          email,
        });
        req.Blog = foundBlog;
        next();
      } catch (err) {
        next(err);
      }
    },
    getASingleBlog: async (req, res, next) => {
      const { foundBlog } = req;
      return res.status(200).json(foundBlog);
    },
    updateABlog: async (req, res, next) => {
      const { Blog } = req;

      try {
        if (
          req.isAuthenticated() &&
          req.user._id.toString() === Blog.authorId.toString()
        ) {
          Object.entries(req.body).forEach((entry) => {
            const [key, value] = entry;
            Blog[key] = value;
          });
          await Blog.save();
          const { username, email } = req.user;
          return res
            .status(200)
            .json(Object.assign({}, Blog._doc, { username, email }));
        } else {
          throw new CustomError(
            'You Are Not Authorized Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
    deleteABlog: async (req, res, next) => {
      const { Blog } = req;
      try {
        if (
          req.isAuthenticated() &&
          req.user._id.toString() === Blog.authorId.toString()
        ) {
          await Blog.deleteOne();
          return res.status(200).json({
            _id: Blog._id,
          });
        } else {
          throw new CustomError(
            'You Are Not Authorized Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
    likeABlog: async (req, res, next) => {
      const { foundBlog, Blog } = req;
      try {
        if (req.isAuthenticated() && !Blog.likes.includes(req.user._id)) {
          Blog.likes = [req.user._id, ...Blog.likes];
          await Blog.save();
          const { username, email } = foundBlog;
          return res
            .status(201)
            .json(Object.assign({}, Blog._doc, { username, email }));
        } else {
          throw new CustomError(
            'You Must Login To Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
    deleteLike: async (req, res, next) => {
      const { foundBlog, Blog } = req;
      try {
        if (req.isAuthenticated()) {
          if (Blog.likes.includes(req.user._id)) {
            const indexLoc = Blog.likes.findIndex(
              (id) => id.toString() === req.user._id.toString()
            );
            Blog.likes.splice(indexLoc, 1);
            await Blog.save();
          }
          const { username, email } = foundBlog;
          return res
            .status(200)
            .json(Object.assign({}, Blog._doc, { username, email }));
        } else {
          throw new CustomError(
            'You Must Login To Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
    leaveAComment: async (req, res, next) => {
      const { foundBlog, Blog } = req;
      try {
        if (req.isAuthenticated()) {
          const newComment = new Comment({
            ...req.body,
            authorId: req.user._id,
            author: req.user.username,
            createdAt: new Date(),
          });
          Blog.comments.push(newComment);
          await Blog.save();
          const { username, email } = foundBlog;
          return res
            .status(201)
            .json(Object.assign({}, Blog._doc, { username, email }));
        } else {
          throw new CustomError(
            'You Must Login To Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
    deleteAComment: async (req, res, next) => {
      const { foundBlog, Blog } = req;
      try {
        const { commentId } = req.params;
        if (req.isAuthenticated()) {
          const { comments } = Blog;
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
              Blog.comments = filteredComments;
              await Blog.save();
              const { username, email } = foundBlog;
              return res
                .status(200)
                .json(Object.assign({}, Blog._doc, { username, email }));
            } else {
              throw new CustomError(
                'You Are Not Authorized Perform This Operation.',
                403
              );
            }
          }
        } else {
          throw new CustomError(
            'You Must Login To Perform This Operation.',
            403
          );
        }
      } catch (err) {
        next(err);
      }
    },
  };
})();
