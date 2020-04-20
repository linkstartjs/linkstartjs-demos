var LinksStartJsDomUtil = require('linkstartjs-nerve-utils').LinksStartJsDomUtil

//@Action(name="demoAction", entrypoint="true", route="demo"  )
function Demo() {
  var _this = this;

  //@Autowire
  var demoPage;

  var user;

  _this.render = function() {
    return LinksStartJsDomUtil.render(_this.demoPage);
  }

  _this.applyBindings = function() {
    LinksStartJsDomUtil.applyActionBindings(_this.demoPage, _this);
    _this.user = LinksStartJsDomUtil.applyModelBindings(_this.demoPage);
  }

  _this.createButtonAction = function(e) {
    console.log("Hello simple form");
    console.log(_this.user);
  }

}

module.exports = Demo;
