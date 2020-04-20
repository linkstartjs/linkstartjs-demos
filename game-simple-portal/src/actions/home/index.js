var LinksStartJsDomUtil = require('linkstartjs-nerve-utils').LinksStartJsDomUtil

//@Action(name="homeAction", entrypoint="true", route="home"  )
function Home() {
  var _this = this;

  //@Autowire
  var homePage;

  _this.homeButtonAction = function(e) {
    window.location = '#win'
  }

  _this.render = function() {
    return LinksStartJsDomUtil.render(_this.homePage);
  }

  _this.applyBindings = function() {
    LinksStartJsDomUtil.applyActionBindings(_this.homePage, _this);
  }

}

module.exports = Home;
