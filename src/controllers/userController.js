export const getSignup = (req, res) => res.render('pages/signup');

export const getLogin = (req, res) => res.render('pages/login');
export const getLogout = (req, res) => res.render('pages/login');
export const getMy = (req, res) => res.render('pages/myAccount');
export const getEditProfile = (req, res) => res.render('pages/editProfile');

export const getChangePassword = (req, res) =>
  res.render('pages/changePassword');
