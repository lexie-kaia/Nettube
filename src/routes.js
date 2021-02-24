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
const UPLOADVIDEO = '/upload';
const VIDEODETAIL = '/:videoId';
const EDITVIDEO = '/:videoId/edit';
const DELETEVIDEO = '/:videoId/delete';

// auth
const GITHUB = '/auth/github';
const GITHUB_CALLBACK = '/auth/github/callback';
const FACEBOOK = '/auth/facebook';
const FACEBOOK_CALLBACK = '/auth/facebook/callback';

export const routes = {
  // home router
  home: HOME,
  search: SEARCH,
  signup: SIGNUP,
  login: LOGIN,
  logout: LOGOUT,

  // accounts router
  accounts: ACCOUNTS,
  me: (userId) => {
    if (userId) return ACCOUNTS + ME;
    else return ME;
  },
  editProfile: (userId) => {
    if (userId) return ACCOUNTS + EDITPROFILE;
    else return EDITPROFILE;
  },
  changePassword: (userId) => {
    if (userId) return ACCOUNTS + CHANGEPASSWORD;
    else return CHANGEPASSWORD;
  },

  // videos router
  videos: VIDEOS,
  videoDetail: (videoId) => {
    if (videoId) return `/videos/${videoId}`;
    else return VIDEODETAIL;
  },
  uploadVideo: (userId) => {
    if (userId) return VIDEOS + UPLOADVIDEO;
    else return UPLOADVIDEO;
  },
  editVideo: (videoId) => {
    if (videoId) return `/videos/${videoId}/edit`;
    else return EDITVIDEO;
  },
  deleteVideo: (videoId) => {
    if (videoId) return `/videos/${videoId}/delete`;
    else return DELETEVIDEO;
  },

  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
};
