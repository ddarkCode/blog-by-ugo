import debug from 'debug';

import Blog from '../database/blogModel';
import User from '../database/user';

const log = debug('index:blogController');

export default (function blogController() {
  return {
    getAllBlogs: async (req, res, next) => {
      try {
        const blogs = await Blog.find({});
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
          throw new Error('You Must Login To Post A Blog.');
        }
      } catch (err) {
        next(err);
      }
    },
    getASingleBlog: async (req, res, next) => {
      const { blogId } = req.params;
      try {
        const foundBlog = await Blog.findById(blogId);
        const { username, email } = await User.findOne({
          _id: foundBlog.authorId,
        });
        if (!foundBlog) {
          return res.status(404).json({ message: 'Blog Not Found!' });
        }
        return res
          .status(200)
          .json(Object.assign({}, foundBlog._doc, { username, email }));
      } catch (err) {
        next(err);
      }
    },
    updateABlog: async (req, res, next) => {
      const { blogId } = req.params;

      try {
        const foundBlog = await Blog.findById(blogId);
        if (!foundBlog) {
          return res.status(404).json({ message: 'Blog Not Found!' });
        }

        if (
          req.isAuthenticated() &&
          req.user._id.toString() === foundBlog.authorId.toString()
        ) {
          Object.entries(req.body).forEach((entry) => {
            const [key, value] = entry;
            foundBlog[key] = value;
          });
          await foundBlog.save();
          const { username, email } = req.user;
          return res
            .status(200)
            .json(Object.assign({}, foundBlog._doc, { username, email }));
        } else {
          return res.status(301).json({
            message: 'You Are Not Authorized Perform This Operation.',
          });
        }
      } catch (err) {
        next(err);
      }
    },
    deleteABlog: async (req, res, next) => {
      const { blogId } = req.params;
      try {
        const foundBlog = await Blog.findById(blogId);
        if (!foundBlog) {
          return res.status(404).json({ message: 'Blog Not Found!' });
        }

        if (
          req.isAuthenticated() &&
          req.user._id.toString() === foundBlog.authorId.toString()
        ) {
          foundBlog.deleteOne();
          return res
            .status(200)
            .json({
              message: 'Blog Successfully Deleted.',
              _id: foundBlog._id,
            });
        } else {
          return res.status(301).json({
            message: 'You Are Not Authorized Perform This Operation.',
          });
        }
      } catch (err) {
        next(err);
      }
    },
  };
})();
