# Nettube

**Youtube clone coding projects built with Node.js and MongoDB**

This project focuses on learning the overall basic environment of web development from scratch using vanilla JavaScript. The codes are mostly based on [Youtube Clone Coding Course](https://nomadcoders.co/wetube) on Nomad Coder, but also refers to many other contents including official technical documents. Listed below are the related materials and this document is mainly about learning and development notes at a beginner level.

<br/>

**Key Features**

- Setting up _Node.js_ development environment with _Babel_, _ESLint_, _Prettier_
- Creating a web server with _Express.js_ and implementing MVC pattern and REST APIs
- Manipulating _MongoDB Atlas_ with _Mongoose_
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
- blog
  - 김정환블로그 [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)

<br/>
<br/>

# Learning and Development Notes

## Table of contents

1. Learning and development Notes
2. ...
3. ...

<br/>

## 1. Setting up a Node.js development environment

---

- [x] node, npm, yarn
  1. `$ yarn init`
  2. creating 'package.json'
  - cheat sheet : [npmAndYarn.md]()
- [x] babel
  1. installing Babel  
     `$ yarn add --dev @babel/{core,node,preset-env}`
  2. configuring `babel.config.js` with plugins/preset
  3. update `package.json`  
     `script: {"start": "babel-node src/index.js"}`
- [x] eslint, prettier
  1. Instatlling packages  
     `$ yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier prettier`
  2. configuring '.eslint.js'
  3. Installing VSCode extensions
  - cheat sheet: [babelEslintPrettier.md]()
- [x] nodemon
  - `$ yarn add --dev nodemon`
  - configuring 'package.json'
  - `script: {"start": "nodemon --exec babel-node src/index.js"}`
- [ ] dotenv
- [ ] gulp
