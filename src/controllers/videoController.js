export const getHome = (req, res) =>
  res.render('pages/home', { pageTitle: 'Home' });

export const getSearch = (req, res) => {
  const { search } = req.query;
  console.log(search);
  res.render('pages/search', { pageTitle: 'Search', search });
};

export const getUpload = (req, res) =>
  res.render('pages/uploadVideo', { pageTitle: 'Upload Video' });

export const getVideoDetail = (req, res) =>
  res.render('pages/videoDetail', { pageTitle: 'Video' });

export const getEditVideo = (req, res) =>
  res.render('pages/editVideo', { pageTitle: 'Edit Video' });

export const getDeleteVideo = (req, res) => res.render('pages/home');
