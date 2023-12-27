import Joi from 'joi';
import debug from 'debug';

const log = debug('index:userValidator');

const userSchema = Joi.object({
  username: Joi.string().min(2).required(),
  password: Joi.string().alphanum().min(8).optional(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org'] },
    })
    .required(),
  googleId: Joi.string().optional(),
});

const validateUser = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (err) {
    log(err);
    next(err);
  }
};

export default validateUser;
