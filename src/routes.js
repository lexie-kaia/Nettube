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
  me: ME,
  editProfile: EDITPROFILE,
  changePassword: CHANGEPASSWORD,

  // videos router
  videos: VIDEOS,
  videoDetail: (videoId) => {
    if (videoId) return `/videos/${videoId}`;
    else return VIDEODETAIL;
  },
  uploadVideo: UPLOADVIDEO,
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
