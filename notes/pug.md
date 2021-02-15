### Reference

- [pug](https://pugjs.org/api/getting-started.html)
- 구름에듀 [한 눈에 끝내는 Node.js](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js)
  - 주요 확장 모듈 - express Pug
- Express.js Guide - [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)

<br>

## template engine

>A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

<br>

## Pug

- ※ Pug uses **indentation** to describe the structure of the template
- 'html:5' + tab key : auto-generate html5 template

**class, id**

```pug
html
    head
    body
        div.class
        div#id
        .divWithClass
        #divWithId

```
**attribute**
```pug
a(href="/path", target="_blank")
```
**text**
```pug
h1 Title
p
  | multi
  | line
  | text
```
**interpolation**
```pug
html
    head
        title #{title}
    body
        p=contents
```
**conditional, iteration**
```pug
if condition
  p string...
else if condition
  p string...
else
  p string...

ul
  each val in [1, 2, 3, 4, 5]
    li=val
```
**layouts - block(template inheritance)**  
```pug
// layouts/layout.pug
html
  head
    title #{title}
  body
    block content

// home.pug
block content
  h1 #{title}
  p contents
```
**partials - includes**  
```pug
// partials/header.pug
header
  ul
    li sign up
    li log in

// home.pug
body
  include partials/header
```
**mixins** \= reusable blocks
```pug
// mixins/videoBlock.pug
mixin videoBlock(video={})
  .videoBlock
    video(src="video.file")

// home.pug
includes mixins/videoBlock

body
  each videoitem in videoList
    +videoBlock({
      file: videoitem.file
    })
```