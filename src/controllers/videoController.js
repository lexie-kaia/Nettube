import mongoose, { mongo } from 'mongoose';

import { routes } from '../routes';
import { ApiError } from '../error';
import Video from '../models/Video';

// home
export const getHome = async (req, res) => {
  console.log(req.user);
  try {
    const videos = await Video.find({});
    return res.render('pages/home', { pageTitle: 'Home', videos });
  } catch (err) {
    console.error(err);
    return res.render('pages/home', { pageTitle: 'Home', videos: [] });
  }
};

// search
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
    console.error(err);
    return res.render('pages/search', {
      pageTitle: 'Search',
      search: err.message,
      videos: [],
    });
  }
};

// upload video
export const getUpload = (req, res, next) =>
  res.render('pages/uploadVideo', { pageTitle: 'Upload Video' });

export const postUpload = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const { path } = req.file;
    // console.log(req.file);
    const newVideo = await Video.create({
      videoFileUrl: path,
      title,
      description,
      // creator: ,
    });
    // user data modify -> user.videos
    return res.redirect(routes.videoDetail(newVideo.id));
  } catch (err) {
    next(err);
  }
};

// video deatil
export const getVideoDetail = async (req, res, next) => {
  try {
    const { videoId } = req.params;
    if (!mongoose.isValidObjectId(videoId)) return next(ApiError.badRequest());
    const [video, videos] = await Promise.all([
      Video.findById(videoId),
      Video.find({ _id: { $ne: videoId } }),
    ]);
    return res.render('pages/videoDetail', {
      pageTitle: 'Video',
      video,
      videos,
    });
  } catch (err) {
    next(err);
  }
};

// edit video
export const getEditVideo = async (req, res, next) => {
  try {
    const { videoId } = req.params;
    if (!mongoose.isValidObjectId(videoId)) return next(ApiError.badRequest());

    const video = await Video.findById(videoId);
    return res.render('pages/editVideo', { pageTitle: 'Edit Video', video });
  } catch (err) {
    next(err);
  }
};

export const postEditVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    const { title, description } = req.body;
    if (!mongoose.isValidObjectId(videoId)) return next(ApiError.badRequest());

    const video = await Video.findById(videoId);
    if (title) video.title = title;
    if (description) video.description = description;
    video.save();
    return res.redirect(routes.videoDetail(video.id));
  } catch (err) {
    next(err);
  }
};

export const getDeleteVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    if (!mongoose.isValidObjectId(videoId)) return next(ApiError.badRequest());

    const video = await Video.findByIdAndDelete(videoId);
    return res.redirect(routes.home);
  } catch (err) {
    next(err);
  }
};
