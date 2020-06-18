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

  _this.resetButtonAction = function(e) {
    counter = 0;
    _this.spanDomElement.textContent=counter;
    _this.messageDomElement.style.display = "none";
  }

}

module.exports = ClickCounterAction;
