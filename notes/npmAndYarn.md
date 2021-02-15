### Reference

- Node.js Learn
  - [npm global or local packages](https://nodejs.dev/learn/npm-global-or-local-packages)
  - [npm dependencies and devDependencies](https://nodejs.dev/learn/npm-dependencies-and-devdependencies)
  - [The package.json guide](https://nodejs.dev/learn/the-package-json-guide)
  - [The package-lock.json file](https://nodejs.dev/learn/the-package-lock-json-file)

<br>

## Install the packages

- a global install
- a local install -> under 'node_modules'
  - dependencies
  - devdependencies

<br>

## In general, All packages should be installed locally

> In general, all packages should be installed locally.
>
> This makes sure you can have dozens of applications in your computer,
> all running a different version of each package if needed.
>
> Updating a global package would make all your projects use the new release,
> and as you can imagine this might cause nightmares in terms of maintenance,
> as some packages might break compatibility with further dependencies, and so on.
>
> All projects have their own local version of a package,
> even if this might appear like a waste of resources,
> it's minimal compared to the possible negative consequences.

<br>

## Npm / Yarn commands

create a package.json file

```
npm init
yarn init
```

install all the dependencies

```
npm install
yarn install
```

install - local - dependencies

```
npm install <package>
yarn add <package>
```

install - local - devdependencies

```
npm install -D <package>
yarn add --dev <package>
```

install - global

```
npm install -g <package>
yarn global add <package>
```

update

```
npm update
yarn upgrade
```

uninstall

```
npm uninstall <package>
yarn remove <package>
```

run script

```
npm run <script>
yarn <script>
```

<br>

## package.json

```
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "test project for package.json",
  "main": "src/index.js",
  "repository": "https://github.com/lexie-kaia/Nettube.git",
  "author": "lexie-kaia <kaia.gayeon.kim@gmail.com>",
  "license": "MIT",
  "private": true,
  "scripts": {

  },
  "dependencies": {

  },
  "devDependencies": {

  },
}
```

- name
  - must be lowercase letters
  - must not have spaces, can use '-' or '\_'
- dependencies : packages required for applications in production environments
- devDependencies : packages required only in development environments
- script
  - start
  - dev
  - build
