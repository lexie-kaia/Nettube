import mongoose from 'mongoose';
import passport from 'passport';

import { ApiError } from '../error';
import { routes } from '../routes';

import User from '../models/User';

// signup
export const getSignup = (req, res) =>
  res.render('pages/signup', { pageTitle: 'Sign Up' });

export const postSignup = async (req, res, next) => {
  try {
    const { username, email, password, passwordConfirm } = req.body;
    if (password !== passwordConfirm)
      return next(ApiError.badRequest(routes.signup));

    const user = new User({
      username,
      email,
    });
    await User.register(user, password);
    next();
  } catch (err) {
    next(err);
  }
};

// login
export const getLogin = (req, res) =>
  res.render('pages/login', { pageTitle: 'Log In' });

export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

// logout
export const getLogout = (req, res) => {
  req.logout();
  res.redirect('/');
};

// github login
export const githubAuth = passport.authenticate('github');

export const githuAuthCallback = passport.authenticate('github', {
  failureRedirect: '/login',
});

export const githubVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  try {
    const username = profile.username;
    const email = profile.emails[0].value;
    const avatarUrl = profile.photos[0].value;
    const githubId = profile.id;

    const user = await User.findOne({ email });
    if (user) {
      user.username = username;
      user.avatarUrl = avatarUrl;
      user.githubId = githubId;
      await user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      username,
      email,
      avatarUrl,
      githubId,
    });
    return cb(null, newUser);
  } catch (err) {
    cb(err);
  }
};

// facebook login
export const facebookAuth = passport.authenticate('facebook');

export const facebookAuthCallback = passport.authenticate('facebook', {
  failureRedirect: '/login',
});

export const facebookVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  try {
    const { name: username, id: facebookId, email } = profile._json;
    const avatarUrl = `https://graph.facebook.com/${facebookId}/picture?type=large`;

    const user = await User.findOne({ email });
    if (user) {
      user.username = username;
      user.avatarUrl = avatarUrl;
      user.facebookId = facebookId;
      await user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      username,
      email,
      avatarUrl,
      facebookId,
    });
    return cb(null, newUser);
  } catch (err) {
    cb(err);
  }
};

export const redirectHome = (req, res) => res.redirect(routes.home);

// my account
export const getMyAccount = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    if (!mongoose.isValidObjectId(userId)) return next(ApiError.badRequest());
    const user = await User.findById(userId).populate('videos');
    return res.render('pages/userDetail', { pageTitle: 'My Account', user });
  } catch (err) {
    next(err);
  }
};

export const getChannel = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!mongoose.isValidObjectId(userId)) return next(ApiError.badRequest());
    const user = await User.findById(userId).populate('videos');
    return res.render('pages/userDetail', { pageTitle: user.username, user });
  } catch (err) {
    next(err);
  }
};

// edit profile
export const getEditProfile = async (req, res, next) => {
  console.log('1');
  try {
    const userId = req.user.id;
    if (!mongoose.isValidObjectId(userId)) return next(ApiError.badRequest());
    const user = await User.findById(userId);
    return res.render('pages/editProfile', {
      pageTitle: 'Edit Profile',
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};

export const postEditProfie = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.id;
    if (!mongoose.isValidObjectId(userId)) return next(ApiError.badRequest());
    const user = await User.findById(userId);
    console.log(user);
    if (name) user.name = name;
    if (email) user.email = email;
    if (req.file) user.avatarUrl = req.file.path;
    console.log(user);
    await user.save();
    return res.redirect(routes.me(req.user.id));
  } catch (err) {
    next(err);
  }
};

// change password
export const getChangePassword = (req, res) =>
  res.render('pages/changePassword', {
    pageTitle: 'Change Password',
    user: req.user,
  });

export const postChangePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, newPasswordConfirm } = req.body;
    if (newPassword !== newPasswordConfirm)
      return next(ApiError.badRequest(routes.changePassword(req.user.id)));
    await req.user.changePassword(currentPassword, newPassword);
    return res.redirect(routes.me(req.user.id));
  } catch (err) {
    next(err);
  }
};
