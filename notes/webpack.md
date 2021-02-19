### Reference

- [webpack document](https://webpack.js.org/concepts/)
- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
- 김정환블로그 [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
- Youtube 생활코딩 [Webpack](https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA)

<br>

## Webpack
> At its core, webpack is a **static module bundler for modern JavaScript applications**. When webpack processes your application, it internally builds <u>a dependency graph which maps every module your project needs</u> and generates one or more bundles.

<br>

## Core Concepts

- Entry
- Output
- Loaders
- Plugins
- Mode
- Browser Compatibility

<br>

## Entry
>An entry point indicates <u>which module webpack should use to begin building out its internal dependency graph</u>. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

- **Dependency Graph**
>Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.
>
>When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser.

- **Webpack Module**
>In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:
>
>- An ES2015 import statement
>- A CommonJS require() statement
>- An AMD define and require statement
>- An @import statement inside of a css/sass/less file
>- An image url in a stylesheet url(...) or HTML \<img src=...\> file

<br>

## Output

>The output property tells webpack <u>where to emit the bundles</u> it creates and <u>how to name these files</u>.

```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```
- `path.resolve()` : resolves a sequence of paths or path segments into an absolute path
- `__dirname` : current directory name

<br>

## Loaders
>Out of the box, <u>webpack only understands JavaScript and JSON files</u>. <u>Loaders allow webpack to process other types of files and convert them into valid modules</u> that can be consumed by your application and added to the dependency graph.
>Loaders have two properties in your webpack configuration:
>
>- The `test` property identifies which file or files should be transformed.(로더를 적용할 파일 유형)
>- The `use` property indicates which loader should be used to do the transforming.(적용할 로더의 이름)
- 로더는 웹팩이 자바스크립트가 아닌 소스 파일(HTML, CSS, 이미지, 폰트 등)을 모듈로 해석해서 dependency graph를 그릴 수 있게 한다.

- Frequently used loaders
  - babel loader
  - sass loader
  - file loader
  - vue loader
  - ts loader
  - more : [webpack document loaders](https://webpack.js.org/loaders/)

<br>

## Plugins
>While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
>
>In order to use a plugin, you need to `require()` it and add it to the `plugins` array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the `new` operator.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

- Frequently used plugins
  - HtmlWebpackPlugin
  - ProgressPlugin
  - MiniCssExtractPlugin
  - more: [webpack document plugins](https://webpack.js.org/plugins/)

<br>

## Mode
>The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

<br>

## 웹팩이 필요한 이유 
- 웹 어플리케이션의 빠른 로딩 속도와 높은 성능
  - 브라우저에서 서버에 요청하는 파일의 숫자와 용량을 줄임
- 파일 단위의 자바스크립트 모듈 관리의 필요성
  - 개발 환경 : 모듈화된 자바스크립트 사용
  - 배포 환경 : 브라우저 호환성을 충족하는 압축, 병합된 자바스크립트
- 웹 개발 작업 자동화 도구
  - HTML, CSS, JS 압축 
  - 이미지 압축
  - CSS 전처리기 변환