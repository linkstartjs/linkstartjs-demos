var LinksStartJsDomUtil = require('linkstartjs-nerve-utils').LinksStartJsDomUtil

//@Action(name="clickCounterAction", entrypoint="true", route="counter"  )
function ClickCounterAction() {
  var $ = this;

  //@Render
  //@Autowire
  var liveExample;

  //@DomElement(id="counter")
  var spanDomElement;

  //@DomElement(id="counter")
  var messageDomElement;

  $.counter=0;

  //@ActionListener("tagId":"clickButton","typeFunction":"onclick")
  $.increaseAction = function(e) {
    $.counter++;
    console.log($.counter);
    console.log($.spanDomElement);
    $.spanDomElement.textContent=$.counter;

    if($.counter == 3){
      $.messageDomElement.style.display = "";
    }
  }

  //@ActionListener("tagId":"resetButton","typeFunction":"onclick")
  $.resetAction = function(e) {
    $.counter = 0;
    $.spanDomElement.textContent=$.counter;
    $.messageDomElement.style.display = "none";
  }


  $.ls_actionListeners = {
    "increaseAction":{
      "tagId":"clickButton",
      "typeFunction":"onclick"
    },
    "resetAction":{
      "tagId":"resetButton",
      "typeFunction":"onclick"
    }
  }

  $.ls_domElements = {
    "spanDomElement":"counter",
    "messageDomElement":"message"
  };

  $.ls_render = "liveExample";

}

module.exports = ClickCounterAction;
