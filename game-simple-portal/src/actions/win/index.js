//@Action(name="winAction", route="win"  )
function Win() {
  var _this = this;

  //@Autowire
  var winPage;

  _this.render = function() {
    let frag = document.createRange().createContextualFragment(_this.winPage.getHtml());
    return frag;
  }

  _this.applyBindings = function() {
    let backButton = document.getElementById("backButton");
    backButton.onclick = _this.backButtonOnClick;
  }

  _this.backButtonOnClick = function(e) {
    window.location = ''
  }
}

module.exports = Win;
