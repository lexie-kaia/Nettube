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
- Creating front-end pages with _Pug_ & _Sass_ and buldling assets with _Gulp_
- Deploying with _AWS lightsail_ and _S3_ service

<br/>

**Related Materials**

- Nomad Coder
  - [[풀스택]유튜브 클론코딩](https://nomadcoders.co/wetube)
  - [Gulp 90분 마스터하기](https://nomadcoders.co/gulp-for-beginners)
- Youtube 생활코딩
  - [WEB2 - Node.js](https://www.youtube.com/watch?v=3RS_A87IAPA&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm)
  - [WEB3 - Express](https://www.youtube.com/watch?v=hwknmhLKgYg&list=PLuHgQVnccGMAGOQu8CBDO9hn-FXFmm4Wp)
  - [WEB3 - Node.js - Cookie & Auth](https://www.youtube.com/watch?v=i51xW3eh-T4&list=PLuHgQVnccGMDo8561VLWTZox8Zs3K7K_m)
  - [WEB4 - Express Session & Auth](https://www.youtube.com/watch?v=jTct6U8VV5E&list=PLuHgQVnccGMCHjWIDStjaZA2ZR-jwq-WU)
  - [WEB5 - Express Passport.js](https://www.youtube.com/watch?v=INUpGK7dTkk&list=PLuHgQVnccGMCBY2wxKYNzFWe6I1gD5xsX)
- groomedu
  - [한 눈에 끝내는 Node.js](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js)
- inflearn
  - [모든 개발자를 위한 HTTP 웹 기본 지식](https://inf.run/cax5)
  - [MongoDB 기초부터 실무까지(feat.Node.js)](https://inf.run/xovo)
- technical documents
  - [Node.js learn](https://nodejs.dev/learn)
  - [Configure Babel](https://babeljs.io/docs/en/configuration) | [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html) | [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
  - [Express.js Guide, API reference](https://expressjs.com/)
  - [Mongoose docs](https://mongoosejs.com/docs/guide.html)
  - ...
- etc
  - 김정환블로그 [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
  - [REST API Tutorial](https://restfulapi.net/)

<br/>
<br/>

# Learning and Development Notes

**Table of contents**

1. Learning and development Notes
2. Creating a web server with Expressjs
3. ...

<br/>

## 1. Setting up a Node.js development environment

- [x] **node, npm, yarn**
  1. `$ yarn init`
  2. creating 'package.json'
  - notes : [npmAndYarn.md]()
- [x] **babel**
  1. installing Babel  
     `$ yarn add --dev @babel/{core,node,preset-env}`
  2. configuring `babel.config.js` with plugins/preset
  3. update `package.json`  
     `script: {"start": "babel-node src/index.js"}`
- [x] **eslint, prettier**
  1. Instatlling packages  
     `$ yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier prettier`
  2. configuring '.eslint.js'
  3. Installing VSCode extensions
  - notes: [babelEslintPrettier.md]()
- [x] **nodemon**
  1. installing `$ yarn add --dev nodemon`
  2.  configuring 'package.json'  
    `script: {"start": "nodemon --exec babel-node src/index.js"}`
- [X] **dotenv**
  1. installing `$ yarn add dotenv`
  2. creating '.env'
  3. `import dotenv`, `dotenv.config()`
  4. `process.env.<env_variable>`
- [ ] **gulp**

## 2. Creating a web server with Expressjs

- [x] **starting the server listening for connection! 'hello world!'**
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
  - (static)
  - [ ] `multer`
- [ ] **API**
  - [X] routes.js
  - [X] Router middleware setup
  - [X] `/router`
    - [X] `homeRouter.js`
    - [X] `accountsRouter.js`
    - [X] `videosRouter.js`
  - [X] `/controller`
    - [X] `userController.js`
    - [X] `videoController.js`
  - api design <br/>   
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
      ||POST|/accounts/profile|req.user<br/>req.body {user}|edit profile<br/>(redirect    account)|
      ||GET|/accounts/password|req.user|change password|
      ||POST|/accounts/password|req.user<br/>req.body {user(pw)}|change password<br/>   (redirect account)|
      |videosRouter|(index)|/videos||(index url)|
      ||GET|/videos/new|req.user|upload new video|
      ||POST|/videos/new|req.user<br/>req.body {video}|upload new video<br/>(redirect     video detail)|
      ||GET|/videos/:videoId|req.params \<videoId\>|display video detail|
      ||GET|/videos/:videoId/edit|req.user<br/>req.params \<videoId\>|edit video detail|
      ||POST|/videos/:videoId/edit|req.user<br/>req.params \<videoId\><br/>req.body     {video}|edit video detail<br/>(redirect video detail)|
      ||POST|/videos/:videoId/delete|req.user<br/>req.params \<videoId\>|delete video<br/>(redirect home)|
      |apiRouter|(index)|/api||(index url)|
      ||GET|/api/:videoId/view|req.params \<videoId\>|ajax update video views|
      ||GET|/api/:videoId/comment|req.params \<videoId\>|ajax update comments|
  - notes: [~~REST API~~]()
- [ ] **view engine setup**
  - [X] installing pug
  - [X] set view engine, views directory
  - [X] /views
    - [ ] /layouts
      - [ ] layout.pug
    - [ ] /partials
      - [ ] header.pug
      - [ ] footer.pug
    - [ ] /
- [ ] **error handler**
