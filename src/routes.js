// home router
const HOME = '/';
const SEARCH = '/search';
const SIGNUP = '/signup';
const LOGIN = '/login';
const LOGOUT = '/logout';

// accounts router
const ACCOUNTS = '/accounts';
const ME = '/me';
const EDITPROFILE = '/profile';
const CHANGEPASSWORD = '/password';

// videos router
const VIDEOS = '/videos';
const VIDEODETAIL = '/:videoId';
const UPLOADVIDEO = '/:videoId/new';
const EDITVIDEO = '/:videoId/edit';
const DELETEVIDEO = '/:videoId/delete';

export const routes = {
  // home router
  home: HOME,
  search: SEARCH,
  signup: SIGNUP,
  login: LOGIN,
  logout: LOGOUT,

  // accounts router
  accounts: ACCOUNTS,
  me: ME,
  editProfile: EDITPROFILE,
  changePassword: CHANGEPASSWORD,

  // videos router
  videos: VIDEOS,
  videoDetail: VIDEODETAIL,
  uploadVideo: UPLOADVIDEO,
  editVideo: EDITVIDEO,
  deleteVideo: DELETEVIDEO,
};

// export default routes;
