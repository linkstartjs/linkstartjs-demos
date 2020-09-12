
![logo](https://raw.githubusercontent.com/jrichardsz/static_resources/master/linkstart/linkstart-533X300.png)

# Mobile Navigation Menu

![image](https://i.ibb.co/jZmW66r/Screenshot-from-2020-09-12-10-46-22.png)

This example demonstrates how create a simple hamburger menu. We need only two files:

# Action

```js
@DefaultAction(name = "helloWorldAction", entrypoint = "true", route = "hello")

function HelloWorldAction() {

  @Render
  @Autowire(name = "helloWorldPage")
  this.page;

  @HtmlElement(id = "myLinks")
  this.menuOptionsDivElement;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  @ActionListener(tagId = "menuButton", type = "onclick")
  this.menuButtonListener = (e) => {
    console.log("show menu");

    if(this.menuOptionsDivElement.style.display === '' || this.menuOptionsDivElement.style.display === "none"){
      this.menuOptionsDivElement.style.display = "block"
    }else if (this.menuOptionsDivElement.style.display === "block") {
      this.menuOptionsDivElement.style.display = "none";
    }

  };

}

module.exports = HelloWorldAction;

```

# Page

```html
@Page(name="helloWorldPage")
<!-- Simulate a smartphone / tablet -->
<div class="mobile-container">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="#home" class="active">Logo</a>
  <div id="myLinks" ls-element=true  >
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a id="menuButton" href="javascript:void(0);" class="icon" ls-element=true >
    <i class="fa fa-bars"></i>
  </a>
</div>

<div style="padding-left:16px">
  <h3>Vertical Mobile Navbar</h3>
  <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
  <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
</div>

<!-- End smartphone / tablet look -->
</div>

```

Basically we need to bind the onclick event on action method and toggle visualization of some div using the classic `style.display`

In the next example, I will show you how update another div, not only `id=root`

> Example from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

# Try your self!!

- https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
- https://codepen.io/erikterwan/pen/EVzeRP
