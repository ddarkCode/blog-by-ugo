import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import findOrCreate from 'mongoose-findorcreate';

const { PASSWORD_SALT } = process.env;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please Provide Your Username Address'],
    },
    email: {
      type: String,
      required: [true, 'Please Provide Your Email Address'],
    },
    password: {
      type: String,
    },
    googleId: String,
  },
  { timestamps: true }
);

userSchema.plugin(findOrCreate);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, +PASSWORD_SALT);
  }
  next();
});

userSchema.methods.confirmPassword = async function (password) {
  return await compare(password, this.password);
};

export default model('User', userSchema);
