# Nettube

**Youtube clone coding projects built with Node.js and MongoDB**

This project focuses on learning the overall basic environment of web development from scratch using vanilla JavaScript. The codes are mostly based on [Youtube Clone Coding Course](https://nomadcoders.co/wetube) on Nomad Coder, but also refers to many other contents including official technical documents. Listed below are the related materials and this document is mainly about learning and development notes at a beginner level.

<br/>

**Key Features**

- Setting up _Node.js_ development environment with _Babel_, _ESLint_, _Prettier_
- Creating a web server with _Express.js_ and implementing MVC pattern
- Manipulating _MongoDB Atlas_ with _Mongoose_
- implementing social authentication with _Passport.js_
- Using AJAX with _fetch APIs_ and _Axios_
- Creating front-end pages with _Pug_ & _Sass_ and buldling assets with _Webpack_
- Deploying with _AWS lightsail_ and _S3_ service

<br/>

**Related Materials**

- Nomad Coder
  - [[풀스택]유튜브 클론코딩](https://nomadcoders.co/wetube)
- Youtube 생활코딩
  - [WEB2 - Node.js](https://www.youtube.com/watch?v=3RS_A87IAPA&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm)
  - [WEB3 - Express](https://www.youtube.com/watch?v=hwknmhLKgYg&list=PLuHgQVnccGMAGOQu8CBDO9hn-FXFmm4Wp)
  - [WEB3 - Node.js - Cookie & Auth](https://www.youtube.com/watch?v=i51xW3eh-T4&list=PLuHgQVnccGMDo8561VLWTZox8Zs3K7K_m)
  - [WEB4 - Express Session & Auth](https://www.youtube.com/watch?v=jTct6U8VV5E&list=PLuHgQVnccGMCHjWIDStjaZA2ZR-jwq-WU)
  - [WEB5 - Express Passport.js](https://www.youtube.com/watch?v=INUpGK7dTkk&list=PLuHgQVnccGMCBY2wxKYNzFWe6I1gD5xsX)
  - [Webpack](https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA)
- groomedu
  - [한 눈에 끝내는 Node.js](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js)
- inflearn
  - [모든 개발자를 위한 HTTP 웹 기본 지식](https://inf.run/cax5)
  - [MongoDB 기초부터 실무까지(feat.Node.js)](https://inf.run/xovo)
- technical documents
  - [Node.js learn](https://nodejs.dev/learn)
  - [Express.js Guide, API reference](https://expressjs.com/)
  - [Configure Babel](https://babeljs.io/docs/en/configuration) | [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) | [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
  - [webpack document](https://webpack.js.org/concepts/)
  - [pug](https://pugjs.org/api/getting-started.html)
  - [Sass document](https://sass-lang.com/documentation)
  - [Mongoose docs](https://mongoosejs.com/docs/guide.html)
  - [passport.js](http://www.passportjs.org/docs/) | [express-session](https://github.com/expressjs/session/blob/master/README.md) | [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) | [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose#readme) | [connect-mongo](https://github.com/jdesboeufs/connect-mongo/tree/v3.x)
- etc
  - 김정환블로그 [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
  - [REST API Tutorial](https://restfulapi.net/)

<br/>
<br/>

# Learning and Development Notes

**Table of contents**

1. Setting up a Node.js development environment
2. Creating a web server with Expressjs
3. Implementing MVC pattern
4. Styling with Sass and bundling assets with Webpack
5. Refactoring and error handling
6. Manipulating MongoDB Atlas with Mongoose
7. Implementing user authentication with passport.js
8. ...
9. ...

<br/>

## 1. Setting up a Node.js development environment

- [x] **node, npm, yarn**
  1. `$ yarn init`
  2. creating `package.json`
  - notes : [npm_and_yarn.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/npmAndYarn.md)

- [x] **babel**
  1. `$ yarn add -D @babel/{core,node,preset-env}`
  2. configuring `babel.config.js` with plugins/preset
  3. `package.json` scripts
     `"dev:server": "babel-node src/index.js"`

- [x] **eslint, prettier**
  1. `$ yarn add -D eslint eslint-config-prettier eslint-plugin-prettier prettier`
  2. configuring `.eslint.js`
  3. Installing VSCode extensions (ESLint, Pretteir)
  - notes: [babel_eslint_prettier.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/babelEslintPrettier.md)

- [x] **nodemon**
  1. installing `$ yarn add -D nodemon`
  2. `package.json` scripts  
    `"dev:server": "nodemon --exec babel-node src/index.js"`  
    '--exec' : runnign non-node scripts

- [X] **dotenv**
  1. installing `$ yarn add dotenv`
  2. creating `.env`
  3. import dotenv, `dotenv.config()`
  4. `process.env.<env_variable>`

- [X] **webpack**
  - notes: [webpack.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/webpack.md)
  - notes: [webpack_config_js.md - 웹팩 설정하기](https://github.com/lexie-kaia/Nettube/blob/main/notes/webpack_config_js.md)
  1. `$ yarn add webpack webpack-cli`
  2. creating `webpack.config.js`
    - entry
    - output
    - mode -> `package.json` scripts  
      - `"dev:assets": "webpack --mode=development"`
      - `"build:assets": "webpack --mode=production"`
  3. javascript
    - `$ yarn add -D babel-loader`
  4. sass
    - `$ yarn add -D sass-loader sass`
    - `$ yarn add -D postcss-loader postcss autoprefixer`
      - 'postcss.config.js'
      - 'package.json' browserlist
        - `"browserslist": [ "last 2 versions" ]`
    - `$ yarn add -D css-loader`
    - `$ yarn add -D mini-css-extract-plugin`
  5. watch
    - `package.json` scripts  
      - `"dev:assets": "webpack --mode=development --watch"`

## 2. Creating a web server with Expressjs

- [x] **starting the server listening for connection! 'hello world!'**
  - notes: ~~[http.md]()~~
  - `app.listen()`
  - `app.get()`
- [ ] **middlewares setup**
  - `app.use()`
  - custom middlewares -> `next()`
  - [X] `helmet()` : helps secure apps by setting various HTTP headers
  - [X] `express.json()` : parses incoming requests with JSON payloads
  - [X] `express.urlencoded({extends: false})`  
    parses incoming requests(Content-Type: application/x-www-form-urlencodedurl) with urlencoded payloads(url로 encoded된(query(key=value)로 변환된) 폼데이터 파싱하는 미들웨어)  
    extends : true(default), allowing for a JSON-like experience with URL-encoded
  - (cookie-parser)
  - [x] `morgan` : HTTP request logger
  - (cors)
  - [X] (static)  
    -> 6. Manipulating MongoDB Atlas with Mongoose
    -> 4. Styling with Sass and bundling assets with Webpack
  - (multer) -> 6. Manipulating MongoDB Atlas with Mongoose

## 3. Implemening MVC pattern

- notes: [mvc.md]()
- [X] **API design** 
  | Router | HTTP verb | URL | Payload | Description |
  |:---|:---|:---|:---|:---|
  | homeRouter | GET | / || home |
  ||GET|/search|req.query /?search=|search|
  ||GET|/signup||signup|
  ||POST|/signup|req.body {user}|signup<br/>(redirect home)|
  ||GET|/login ||login|
  ||POST|/login|req.body {user(id,pw)}|login<br/>(redirect home)|
  ||GET|/logout|req.user|logout<br/>(redirect home)|
  ||GET|/auth/github||github login|
  ||GET|/auth/github/callback||github login|
  ||GET|/auth/facebook||facebook login|
  ||GET|/auth/facebook/callback||facebook login|
  |accountsRouter|(index)|/accounts| | (index url) |
  ||GET|/accounts/me| req.user | display personal account |
  ||GET|/accounts/profile|req.user|edit profile|
  ||POST|/accounts/profile|req.user<br/>req.body {user}|edit profile<br/>(redirect me)|
  ||GET|/accounts/password|req.user|change password|
  ||POST|/accounts/password|req.user<br/>req.body {user(pw)}|change password<br/>   (redirect me)|
  |videosRouter|(index)|/videos||(index url)|
  ||GET|/videos/upload|req.user|upload new video|
  ||POST|/videos/upload|req.user<br/>req.body {video}|upload new video<br/>(redirect video detail)|
  ||GET|/videos/:videoId|req.params \<videoId\>|display video detail|
  ||GET|/videos/:videoId/edit|req.user<br/>req.params \<videoId\>|edit video detail|
  ||POST|/videos/:videoId/edit|req.user<br/>req.params \<videoId\><br/>req.body     {video}|edit video detail<br/>(redirect video detail)|
  ||POST|/videos/:videoId/delete|req.user<br/>req.params \<videoId\>|delete video<br/>(redirect home)|
  |apiRouter|(index)|/api||(index url)|
  ||GET|/api/:videoId/views|req.params \<videoId\>|ajax update video views|
  ||GET|/api/:videoId/comments|req.params \<videoId\>|ajax update comments|
  - notes: [~~REST API~~]()

- [X] **Contoller draft**
  - [X] `routes.js`
  - [X] Router middleware setup
  - [X] `/router`
    - [X] `homeRouter.js`
    - [X] `accountsRouter.js`
    - [X] `videosRouter.js`
  - [X] `/controller`
    - [X] `userController.js`
    - [X] `videoController.js`

- [X] **View draft**
  - notes: [pug.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/pug.md)
  - [X] view engine setup
    - [X] installing pug
    - [X] set view engine, views directory
  - process
    1. draft
    2. pug(html contents) -> mongoDb
    3. sass(css styling) -> webpack
  - [X] `/views`
    - [X] `/layouts`
      - [X] `layout.pug`
    - [X] `/partials`
      - [X] `header.pug`
      - [X] `footer.pug`
    - [ ] `/minxins` -> 6. Manipulating MongoDB Atlas with Mongoose
    - [X] `/pages`
- [X] **View Contents**
  - [X] `middlewares.js`
  - [X] home
  - [X] search
  - [X] signup
  - [X] login
  - [X] myAccount
  - [X] editProfile
  - [X] changePassword
  - [X] videoDetail
  - [X] uploadVideo
  - [X] editVideo
  - [X] error

## 4. Styling with Sass and bundling assets with Webpack
- notes: [sass.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/sass.md)
- [X] planning | designing
- [X] configuring webpack
- [X] static middleware
- [X] folder structure overview
  ```
  scss/
  |
  |- base/
  |   |- _reset.scss
  |   |- ...
  |
  |- abstracts/
  |   |- _variables.scss
  |   |- _typography.scss
  |
  |- components/
  |   |- _ buttons.scss
  |   |- _ form.scss
  |
  |- partials/
  |   |- _header.scss
  |   |- _footer.scss
  |   |- _sidebar.scss
  |   |- _socialLogin.scss
  |   |- _ videoPlayer.scss
  |
  |- pages/
  |   |- home.scss
  |   |- search.scss
  |   |- videoDetail.scss
  |   |- uploadVideo.scss
  |   |- editVideo.scss
  |   |- myAccount.scss
  |   |- formMain.scss
  |
  | 
  `- styles.scss
  ```
  ```
  styels.scss --->  main.js ---> webpack(+autoprefixer) ---> static/styels.css
  ```
- [X] styling draft
- [ ] custom video player with JavaScript
- [ ] video recorder with JavaScript

## 5. Refactoring and error handling
- [X] **api error handler - http status**
  - [X] `error.js`

## 6. Manipulating MongoDB Atlas with Mongoose

- notes: [mongo.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/mongo.md)
- [X] creating MongoDB Atlas cluster
- [X] `$ yarn add mongoose`
- [X] `db.js` -> `init.js`
- [X] connecting MongoDB Atlas with mongoose, mongoDB compass
- [X] defining Schema
    - [X] /models
      - [X] Video.js
      - [X] User.js
      - [X] Comment.js

  |Schema|name|value|options|
  |:---|:---|:---|:---|
  |Video||
  ||videoFileUrl|String|required|
  ||title|String|required|
  ||description|String||
  ||createdAt|Date|default: Date.now|
  ||views|Number|default: 0|
  ||creator|ObjectId|ref:User|
  ||comments|[ObjectId]|ref:Comment|
  |User||||
  ||username|String||
  ||email|String||
  ||avatarUrl|String||
  ||facebookId|Number||
  ||githubId|Number||
  ||comments|[ObjectID]|ref:Comment|
  ||videos|[ObjectID]|ref:Video|
  |Comment||||
  ||text|String|required|
  ||creator|ObjectId|ref:User|
  ||createdAt|Date|default:Date.now|

- [ ] **CRUD**
  - [ ] **upload video page form : upload(creating) videos**
    - [X] multer middleware
      - `yarn add multer`
      - `middlewares.js`
        -> import multer(\<form enctype="multipart/form-data"\>\</form\>)
    - [X] create documents
      - `videoController.js`
        -> `req.body`, `req.file`
      - `Video.create(newVideo)`
    - [ ] make `isPrivate`
    - [ ] update `User.videos.id`
    - [X] redirect to video detail page
  - [X] **home video section : finding all videos**
    - [X] static middleware `/uploads`
    - [X] `Video.find({})`
    - [X] home video mixins
    - [X] a href -> video detail page
    - [ ] populate()
      - [ ] creator
  - [X] **search video section : finding videos by query**
    - [X] `req.query` -> search
    - [X] `Video.find({ title: { $regex: search, $options: 'i'}})`
    - [X] search video mixins
    - [X] a href -> video detail page
    - [ ] populate()
      - [ ] creator
  - [ ] **video detail page : finding video by id**
    - [X] a href  
      -> `routes.js` `routes.videoDetail()`
    - [X] `req.params` -> videoId
    - [X] `mongoose.isValidObjectId(req.params)`
    - [X] Promise.all)[]
      - [X] `Video.findById(videoId)` -> video
      - [X] `Video.find({ _id: { $ne: videoId }})` -> videos
    - [X] video detail, videos mixins
    - [X] a href -> edit video page 
    - [ ] populate()
      - creater
      - comments
  - [ ] **edit video page form : editing videos**
    - [ ] **get edit video page**
      - [X] a href  
        -> `routes.js` `routes.editVideo()`
      - [X] `req.params` -> videoId
      - [X] `mongoose.isValidObjectId(req.params)`
      - [ ] make `isPrivate`
      - [ ] user validation
      - [X] Video.findById(videoId)
      - [ ] populate()
        - creator
        - comments
      - [X] update input value
    - [ ] **post edit video page**
      - [X] `req.params`, `req.body` -> videoId, video
      - [X] `mongoose.isValidObjectId(req.params)`
      - [ ] make `isPrivate`
      - [ ] user validation
      - [X] `Video.findById(videoId)`, `video.save()`
      - [X] redirect to video detail page
  - [ ] **delete button : deleting videos**
    - [X] a href  
        -> `routes.js` `routes.deleteVideo()`
    - [X] `req.params` -> videoId
    - [X] `mongoose.isValidObjectId(req.params)`
    - [ ] make `isPrivate`
    - [ ] user validation
    - [X] Video.findByIdAndDelete(videoId)
    - [ ] update `User.videos.id`
    - [X] redirect to home page

## 7. Implementing user authentication with passport.js
- notes: [user_auth.md](https://github.com/lexie-kaia/Nettube/blob/main/notes/mongo.md)
1. [X] **phase 1: passport setup with session**
  - [X] **install packages**
    `$ yarn add passport express-session connect-mongo`
  - [X] **set up session**
    - secret
      - https://randomkeygen.com/
      - process.env.COOKIE_SECRET
    - resave: false
    - saveUninitialized: false
    - (cookie)
    - store
      - connect-mongo
  - [X]**initialize passport and enable session support**
    - `passport.initailize()`
    - `passport.session()`
2. [X] **phase 2: local strategy setup**
  - [X] **install packages**
    `$ yarn add passport-local passport-local-mongoose`
  - [X] **add passport-local-mongoose plugin in `User` model**
  - [X] `passport.js`
    - [X] create local strategy
    - [X] `passport.serializeUser()` 
      : invoked on authentication, store serialized user idenifier in the session
    - [X] `passport.deserializeUser()`
      : invoked on every subsequent request, restore `req.user`
3. [X] **phase 3: signup and login controller setup**
  - [X] postSignup
  - [X] postLogin
  - [X] change header menu
  - [X] getLogout
4. [ ] **phase 4: social authentication**
  - [X] **github**
    1. [X] install
      `$ yarn add passport-github2`
    2. [X] register an application
      - https://github.com/settings/applications/new
    3. [X] configure strategy
      - clientID
      - clientSecret
      - callbackURL
      - verifyCallback
      - scope
    4. [X] authenticate requests
      - /auth/github
      - /auth/github/callback
  - [ ] **facebook**
5. [ ] **phase 5: route protection(access control)**
- [ ] route protection
- [ ] 

## 8. ajax

## 9. deploy

preparing
- [ ] multer dest