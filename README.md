<div align="center">
  <a href="https://github.com/nicejade/prettier-plugin-quickapp"><img width="200" src="https://raw.githubusercontent.com/nicejade/prettier-plugin-quickapp/master/doc/images/pretitter.png" alt="Prettier Plugin Quickapp"></a>
  <a href="https://github.com/nicejade/prettier-plugin-quickapp"><img
  width="200" src="https://raw.githubusercontent.com/nicejade/prettier-plugin-quickapp/master/doc/images/quickapp.png" alt="Prettier Plugin Quickapp"></a>
</div>

<h2 align="center">Prettier Quickapp Plugin</h2>

<div align="center">
  <strong>🛠 Prettier for 
    <a href="https://nicelinks.site/post/5b5fb5bc615bf842b609105f">quickapp</a>.
  </strong>
</div>

<br>

<div align="center">
  <a href="https://www.npmjs.com/package/prettier-plugin-ux">
    <img src="https://img.shields.io/npm/v/prettier-plugin-ux.svg" alt="prettier-plugin-ux">
  </a>
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="node version">
  </a>
  <a href="https://www.npmjs.com/package/prettier-plugin-ux">
    <img src="https://img.shields.io/npm/dt/prettier-plugin-ux.svg" alt="prettier-plugin-ux">
  </a>
  <a href="https://github.com/nicejade/vue-boilerplate-template">
    <img src="https://img.shields.io/github/license/nicejade/vue-boilerplate-template.svg" alt="LICENSE">
  </a>
  <a href="https://about.me/nicejade"><img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade"></a>
</div>

### English | [中文](https://quickapp.lovejade.cn/prettier-quickapp-plugin/)

## Introduction

[Prettier](https://nicelinks.site/post/5c16083e819ae45de1453caa) is an opinionated code formatter. This plugin integrates `prettier-plugin-ux` into [Prettier](https://nicelinks.site/post/5c16083e819ae45de1453caa), thus providing you with a universal interface to code formatting. dealing with `.ux` files via Prettier API, It can provide a common style guide  for a project and team, and can help identify potential problems with the code. Using it to write [QuickApp](https://nicelinks.site/post/5b5fb5bc615bf842b609105f) will greatly improve development efficiency and happiness.

## Install

```bash
yarn add --dev --exact prettier prettier-plugin-ux
```

## Usage

```bash
prettier --write "**/*.ux"
# or
npx prettier --write "**/*.ux"
```

You can add a configuration similar to the following in the `scripts` of package.json. You can use one-click landscaping (`yarn prettier`) for your fast application code. This includes css, less, sass, etc., which can also be used to beautify. Markdown and so on, you can see in the [opinionated-code-formatter](https://github.com/prettier/prettier#opinionated-code-formatter) that `prettier` has built-in support for multiple languages.

```bash
"prettier": "prettier --write 'src/**/*.js' 'src/**/*.ux'",
```

In addition, you can also inject [onchange](https://github.com/Qard/onchange) dependencies, which use the `glob` mode to monitor files and run commands when adding, changing, or deleting anything. If you add a configuration similar to the following in the `scripts` of package.json, run the `yarn prettier-watch` command during development to beautify the code after saving, which will definitely improve your development efficiency and experience.

```bash
"prettier-watch": "onchange '**/*.md' 'src/**/*.js' 'src/**/*.ux' -- prettier --write {{changed}}"
```
`Prettier` ships with a handful of customizable format options, usable in both the `CLI` and `API`. You can configure it yourself in *package.json* according to your own habits. Specific options and instructions can be found in [Options | Prettier](https://prettier.io/docs/en/options.html).

```json
"prettier": {
    "singleQuote": true,
    "semi": false,
    "printWidth": 120,
    "proseWrap": "never"
},
```

## Input

```js
export default {
onInit () {
},
onShow   () {
APP_STATISTICS.page_show(this)
}
}
<style lang="less">
.page-wrapper{flex-direction: column;
width:6 * @size-factor;
}
</style>
```

## Output

```js
export default {
  onInit() {},
  onShow() {
    APP_STATISTICS.page_show(this)
  }
}
<style lang="less">
.page-wrapper {
  flex-direction: column;
  width: 6 * @size-factor;
}
</style>
```

Prettier can be run [in your editor on-save](http://prettier.io/docs/en/editors.html), in a [pre-commit hook](https://prettier.io/docs/en/precommit.html), or in [CI environments](https://prettier.io/docs/en/cli.html#list-different) to ensure your codebase has a consistent style without devs ever having to post a nit-picky comment on a code review ever again!

The use and configuration, there are detailed descriptions in the Prettier documentation, of course, you can also refer to this - dedicated to building a more elegant rapid application development scaffolding template: [quickapp-boilerplate-template](https://github.com/nicejade/quickapp-boilerplate-template/blob/master/package.json).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, [nicejade](https://aboutme.lovejade.cn/)
