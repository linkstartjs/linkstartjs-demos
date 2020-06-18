
![logo](https://raw.githubusercontent.com/jrichardsz/static_resources/master/linkstart/linkstart-533X300.png)

# click-counter example

This example demonstrates how update dom element values using an @Action variable and a clean html @Page.

When the application starts, **ClickCounterAction** is invoked because it is marked as entrypoint `entrypoint="true"`

LinkStart set the @Page instance into @Action because this action has been declared as @Autowire

```js
//@Autowire
var liveExample;
```

When **ClickCounterAction** is invoked, `render()` and `applyBindings()` methods are executed.

**applyBindings()** is in charge of binding buttons to actions and dom elements to internal @Action variables: `spanDomElement, messageDomElement`


```js
LinksStartJsDomUtil.applyActionBindings(_this.liveExample, _this);
_this.spanDomElement = LinksStartJsDomUtil.getModelElementById(_this.liveExample, "counter");
_this.messageDomElement = LinksStartJsDomUtil.getModelElementById(_this.liveExample, "message");
```

**clickButtonAction()** is in charge of increase the click counter and show its value.

**resetButtonAction()** is in charge of reset the click counter and show its value.

---

Source code: @Page

```html
<!-- @Page("liveExample") -->
<div class="liveExample">

  <div>You've clicked <span id="counter" ls-model=true >0</span> times</div>

  <input type="button" value="Click me" id="clickButton" ls-actionable=true >

  <div style="display: none;" id="message" ls-model=true >
    That's too many clicks! Please stop before you wear out your fingers.
    <button id="resetButton" ls-actionable=true >Reset clicks</button>
  </div>
</div>
```


Source code: @Action

```js
var LinksStartJsDomUtil = require('linkstartjs-nerve-utils').LinksStartJsDomUtil

//@Action(name="clickCounterAction", entrypoint="true", route="counter"  )
function ClickCounterAction() {
  var _this = this;

  //@Autowire
  var liveExample;

  var counter=0;
  var spanDomElement;
  var messageDomElement;

  _this.render = function() {
    return LinksStartJsDomUtil.render(_this.liveExample);
  }

  _this.applyBindings = function() {
    LinksStartJsDomUtil.applyActionBindings(_this.liveExample, _this);
    _this.spanDomElement = LinksStartJsDomUtil.getModelElementById(_this.liveExample, "counter");
    _this.messageDomElement = LinksStartJsDomUtil.getModelElementById(_this.liveExample, "message");
  }

  _this.clickButtonAction = function(e) {
    counter++;
    console.log(counter);
    _this.spanDomElement.textContent=counter;

    if(counter == 3){
      _this.messageDomElement.style.display = "";
    }
  }

  _this.resetButtonAction = function(e) {html
    counter = 0;
    _this.spanDomElement.textContent=counter;
    _this.messageDomElement.style.display = "none";
  }

}

module.exports = ClickCounterAction;
```
