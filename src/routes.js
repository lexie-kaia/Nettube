// home router
const HOME = '/';
const SEARCH = '/search';
const SIGNUP = '/signup';
const LOGIN = '/login';
const LOGOUT = '/logout';

// accounts router
const ACCOUNTS = '/accounts';
const ME = '/me';
const EDIT_PROFILE = '/profile';
const CHANGE_PASSWORD = '/password';

// videos router
const VIDEOS = '/videos';
const UPLOAD_VIDEO = '/upload';
const VIDEO_DETAIL = '/:videoId';
const EDIT_VIDEO = '/:videoId/edit';
const DELETE_VIDEO = '/:videoId/delete';

// auth
const GITHUB = '/auth/github';
const GITHUB_CALLBACK = '/auth/github/callback';
const FACEBOOK = '/auth/facebook';
const FACEBOOK_CALLBACK = '/auth/facebook/callback';

// api
const API = '/api';
const REGISTER_VIEWS = '/:videoId/views';
const ADD_COMMENTS = '/:videoId/comments';

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
    if (userId) return ACCOUNTS + EDIT_PROFILE;
    else return EDIT_PROFILE;
  },
  changePassword: (userId) => {
    if (userId) return ACCOUNTS + CHANGE_PASSWORD;
    else return CHANGE_PASSWORD;
  },

  // videos router
  videos: VIDEOS,
  videoDetail: (videoId) => {
    if (videoId) return `/videos/${videoId}`;
    else return VIDEO_DETAIL;
  },
  uploadVideo: (userId) => {
    if (userId) return VIDEOS + UPLOAD_VIDEO;
    else return UPLOAD_VIDEO;
  },
  editVideo: (videoId) => {
    if (videoId) return `/videos/${videoId}/edit`;
    else return EDIT_VIDEO;
  },
  deleteVideo: (videoId) => {
    if (videoId) return `/videos/${videoId}/delete`;
    else return DELETE_VIDEO;
  },

  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,

  api: API,
  registerViews: REGISTER_VIEWS,
  addComments: ADD_COMMENTS,
};
