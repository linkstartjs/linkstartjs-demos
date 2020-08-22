var LinksStartJsDomUtil = require('linkstartjs-nerve-utils').LinksStartJsDomUtil

//@Action(name="winAction", route="win"  )
function Win() {
  var _this = this;

  //@Autowire
  var winPage;

  _this.render = function() {
    return LinksStartJsDomUtil.render(_this.winPage);
  }

  _this.applyBindings = function() {
    LinksStartJsDomUtil.applyActionBindings(_this.winPage, _this);
  }

  _this.backButtonAction = function(e) {
    window.location = '#home'
  }
}

module.exports = Win;
