
![logo](https://raw.githubusercontent.com/jrichardsz/static_resources/master/linkstart/linkstart-533X300.png)

# [jonsuh/hamburgers](github.com/jonsuh/hamburgers)

![image](https://i.ibb.co/1Qnf75N/Screenshot-from-2020-09-12-12-49-31.png)

This example demonstrates how  exec custom code after render using: `afterRender` method.

# Action

```js
@DefaultAction(name = "helloWorldAction", entrypoint = "true", route = "hello")
function HelloWorldAction() {
  @Render
  @Autowire(name = "helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };
  this.afterRender = () => {
    console.log("afterLoad: Hello World!!");

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      hamburgers.forEach(function(hamburger, i) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
  };
}
module.exports = HelloWorldAction;
```

# Page

```html
@Page(name="helloWorldPage")
<div class="hamburger hamburger--3dx">
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
</div>
<code>hamburger--3dx</code>

<br>

<div class="hamburger hamburger--3dx-r">
  <div class="hamburger-box">
    <div class="hamburger-inner"></div>
  </div>
</div>
<code>hamburger--3dx-r</code>

```

Basically:

- add the css from https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css
- add the html from https://github.com/jonsuh/hamburgers/blob/master/dist/example.html
- add the js from https://github.com/jonsuh/hamburgers/blob/master/dist/example.html


> Example from jonsuh.com/hamburgers/
