import { routes } from '../routes';
import Video from '../models/Video';

export const getHome = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render('pages/home', { pageTitle: 'Home', videos });
  } catch (err) {
    return res.render('pages/home', { pageTitle: 'Home', videos: [] });
  }
};

export const getSearch = async (req, res) => {
  try {
    const { search } = req.query;
    const videos = await Video.find({
      title: {
        $regex: search,
        $options: 'i',
      },
    });
    if (videos.length === 0) throw new Error('No results found');
    return res.render('pages/search', {
      pageTitle: 'Search',
      search: `Searching for ${search}`,
      videos,
    });
  } catch (err) {
    console.log(err);
    return res.render('pages/search', {
      pageTitle: 'Search',
      search: err.message,
      videos: [],
    });
  }
};

// upload video
export const getUpload = (req, res) =>
  res.render('pages/uploadVideo', { pageTitle: 'Upload Video' });

export const postUpload = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { path } = req.file;
    console.log(req.file);
    const newVideo = await Video.create({
      videoFileUrl: path,
      title,
      description,
      // creator: ,
    });
    // user data modify -> user.videos
    return res.redirect(routes.home);
    // redirect to videoDetailpage
  } catch (err) {
    console.log(err);
  }
};

export const getVideoDetail = (req, res) =>
  res.render('pages/videoDetail', { pageTitle: 'Video' });

export const getEditVideo = (req, res) =>
  res.render('pages/editVideo', { pageTitle: 'Edit Video' });

export const getDeleteVideo = (req, res) => res.render('pages/home');
