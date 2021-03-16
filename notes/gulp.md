### Reference

- [npm gulp](https://www.npmjs.com/package/gulp)


<br>

## Getting Statred

1. `yarn add -D gulp`

2. creating `gulpfile.js` | `gulptile.ts` | `gulpfile.babel.js`

3. `import gulp from 'gulp'`

4. creating tasks
  - working with files
    ```js
    function task() {
      gulp.src(<filepath>)
        .pipe(<taskFunction>)
        .pipe(gulp.dest(<filepath>))
    }
    ```

  - individual tasks can be composed into larger operation as part of `series()` or `parallel()`
    ```js
    gulp.series(task1, task2, task3) // working sequentially
    gulp.parallel(task1, task2, task3) // working simultaneously
    ```

5. watching
  ```js
  function devwatch() {
    gulp.watch(<filepath>, <task>)
  }
  ```
  - avoid synchronous task

6. exporting 
  - to run by `gulp` command in console

    1. exporting
      - `export const build = () => {}`  
      - `module.exports = build`  
      (`gulp.task()` isn't recommended pattern anymore)

    2. `package.json`
      ```json
      {
        "scripts": {
          "build": "gulp build"
        }
      }
      ```
      - `npm run build`
      - `yarn build`