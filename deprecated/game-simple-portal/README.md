
![logo](https://raw.githubusercontent.com/jrichardsz/static_resources/master/linkstart/linkstart-533X300.png)

# LinkStart.js Demos

Official repository : https://github.com/linkstartjs/linkstartjs

# Simple Two Pages Home Game

- Create a web with to pages : home and win.
- Home page must have a title "Pets vs Aliens" and a button called "new game"
- When "new game" button is clicked, a new page must be loaded : Win page
- Win page must have a message : "You win" and a button "exit"
- When "exit" button is clicked, initial page must be loaded: Home page

# Implementation with Lassie.js

## Html Templates

Create 2 html files and annotate them with **@Template**

**/src/pages/home/index.html**
```html
<!-- @Template("homeHtmlTemplate") -->
<div class="page">
  <div class="head">
    <h2>Pets vs Aliens</h2>
  </div>
  <button id="homeButton" ls-actionable=true class="button" >New Game</button>
</div>
```

**/src/pages/win/index.html**
```html
<!-- @Template("winHtmlTemplate") -->
<div class="page">
  <div class="head">
      <h2>You win</h2>
  </div>
  <button id="backButton" ls-actionable=true class="button" >Exit</button>
</div>
```

## Page Actions

Create 2 js modules annotated with **@PageListener**

**/src/actions/home/index.js**
```js
//@PageListener(name="homeListener", entrypoint="true", fragmentUrlId="home"  )
function Home() {
  var _this = this;
  _this.homeButtonOnClick = function(e) {
    window.location = '#win'
  }
}
module.exports = Home;
```

**/src/actions/win/index.js**
```js
//@PageListener(name="winListener", fragmentUrlId="win"  )
function Win() {
  var _this = this;
  _this.backButtonOnClick = function(e) {
    window.location = '#home'
  }
}
module.exports = Win;
```

## Lassie Starter

Create the startup module

**src/lassie/startup/index.js**

```js
function LassieStartupApplication() {
  var _this = this;
  _this.context = {};
  _this.listenersByFragmentUrlId = {};
}
module.exports = LassieStartupApplication;
```

## Entrypoint module

Create the entrypoint js module

**src/index.js**

```js
import './styles/index.scss'
import LassieStartupApplication from './lassie/startup'
let lassieStartupApplication = new LassieStartupApplication();
lassieStartupApplication.start();
```

# Run

- npm install
- npm run dev
- go to http://localhost:8080

You will see the home page and if you click on **new game** button you will be redirected to win page with "You win" message

# How it works?

- Coming Soon


# Road map

- Externalize loaders and autumnframework source code as new git repositories
- Create 3 repository for this loaders
- Code refactor
- Unit tests
- Package as library
- Create more default ui components and layout

# Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">Richard Leon</a></label>
      <br />
    </td>    
  </tbody>
</table>
