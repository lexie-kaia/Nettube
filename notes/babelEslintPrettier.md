### Reference

- Babel
  - [Configure Babel](https://babeljs.io/docs/en/configuration)
- Prettier
  - [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
- ESLint
  - [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
- 김정환 블로그 - [프론트엔드 개발환경의 이해](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
- kakao Tech - [ESLint 조금 더 잘 활용하기](https://tech.kakao.com/2019/12/05/make-better-use-of-eslint/)
  <br>

---

## Babel, Eslint, Prettier

- Babel

  - is a JavaScript Transcompiler
  - convert ECMAScript 2015(ES6)+ code into a backwards compatible version of JavaScript in current and older browers or environment
  - support for TypeScript and JSX
  - [setup]
    1. installing Babel  
       `$ yarn add --dev @babel/{core,node,preset-env}`
       - @babel/core
       - @babel/node : cli for node
       - @babel/preset-env
    2. configuring `babel.config.js` with plugins/preset
    3. update `package.json`  
       `script: {"start": "babel-node src/index.js"}`

- Eslint

  1. formatting code(making code style consistent)
  2. improving code quality(preventing errors)

     > 포맷팅은 일관된 코드 스타일을 유지하도록 하고 개발자로 하여금 쉽게 읽히는 코드를 만들어 준다. 이를 테면 "들여쓰기 규칙", "코드 라인의 최대 너비 규칙"을 따르는 코드가 가독성이 더 좋다.  
     > 한편, 코드 품질은 어플리케이션의 잠재적인 오류나 버그를 예방하기 위함이다. 사용하지 않는 변수 쓰지 않기, 글로벌 스코프 함부로 다루지 않기 등이 오류 발생 확률을 줄여 준다.

- Pretter

  - Code Formatter
  - [setup]
    1. Instatlling packages  
       `$ yarn add --dev eslint eslint-config-prettier eslint-plugin-prettier prettier`
       - eslint
       - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) : turning off rules that conflict or are unnecessary with Prettier
       - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) : runnin Prettier inside eslint
       - prettier
    2. configuring '.eslint.js'
    3. Installing VSCode extensions
