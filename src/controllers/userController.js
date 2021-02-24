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

// Github login
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

export const redirectHome = (req, res) => res.redirect(routes.home);

// my account
export const getMy = (req, res) =>
  res.render('pages/myAccount', { pageTitle: 'My Account' });

// edit profile
export const getEditProfile = (req, res) =>
  res.render('pages/editProfile', { pageTitle: 'Edit Profile' });

// change password
export const getChangePassword = (req, res) =>
  res.render('pages/changePassword', { pageTitle: 'Change Password' });
