### Reference

- Sass
  - [Learn Sass](https://sass-lang.com/guide)
  - [Document](https://sass-lang.com/documentation)
- [Sass guideline](https://sass-guidelin.es/ko/#sass-)
- 벨로퍼트와 함께하는 모던 리액트 [Sass](https://react.vlpt.us/styling/01-sass.html)
- [CSS 속성 순서](https://howdy-mj.me/css/order-of-css-properties/)
- [Airbnb CSS/Sass styleguide](https://github.com/airbnb/css#oocss-and-bem)

<br>

## Sass

- Sass(Syntactically Awesome StyleSheets)
- CSS preprocessor

- Sass의 장점
  - CSS를 구조화하여 가독성이 높고, 유지보수가 쉬운 코드를 작성할 수 있다.
  - Mixin과 같은 기능을 활용하여 코드를 재사용할 수 있다.

<br>

## What's new in Sass

- **variables**
  - `$`
- **nesting**
  - `&` (parent selector)
- **partials**
  - `@import`
  - (파일 이름이 `_`(underscore)로 시작하면 .css 파일로 따로 컴파일하지 않음)
- (modules)
- **mixins**
  - reusable code block
  ```scss
  // defining mixins
    // @mixin <name> {}
    // @mixin <name>(<argument>) {}

    // @include <name> {}
    // @include <name>(<argument>)
  ```
- (extends/inheritance)
- **operators**


<br>

## Architecture

- folder structure
```
sass/
|
|- base/
|   |- _reset.scss
|   |- ...
|
|- abstracts/
|   |- _variables.scss
|   |- _typography.scss
|   |- ...
|
|- components/
|   |- _ buttons.scss
|   |- _ form.scss
|   |- _ videoPlayer.scss
|   |- ...
|
|- partials/
|   |- _header.scss
|   |- _footer.scss
|   |- _sidebar.scss
|   |- ...
|
|- pages/
|   |- home.scss
|   |- search.scss
|   |- videoDetail.scss
|   |- ...
|
|- ...
| 
`- styles.scss
```

- component structure
```scss
.button {
  display:
  background-color:
  color:
  ...

  &.large {
    height:
    font-size:
    ...
  }

  &.medium {
    ...
  }

  &.small {
    ...
  }

  &:hover {
    ...
  }

  &:active {
    ...
  }
}
```
- css property order : group by type
```css
#selector {
  /* positionings */
  position:
  z-index:
  top:
  right:

  /* display & box-model */
  display:
  overflow:
  box-sizing:
  margin:
  padding:
  border:
  width:
  height:

  /* color */
  background:
  color:

  /* text */
  font-size:
  font-weight:
  line-height:

  /* other */
    /* shadow */
    /* transform */
    /* animation */
    /* visibility */
}
```


  
  
