export const getSignup = (req, res) =>
  res.render('pages/signup', { pageTitle: 'Sign Up' });

export const getLogin = (req, res) =>
  res.render('pages/login', { pageTitle: 'Log In' });

export const getLogout = (req, res) => res.render('pages/home');

export const getMy = (req, res) =>
  res.render('pages/myAccount', { pageTitle: 'My Account' });

export const getEditProfile = (req, res) =>
  res.render('pages/editProfile', { pageTitle: 'Edit Profile' });

export const getChangePassword = (req, res) =>
  res.render('pages/changePassword', { pageTitle: 'Change Password' });
