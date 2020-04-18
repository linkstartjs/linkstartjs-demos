//@Action(name="homeAction", entrypoint="true", route="home"  )
function Home() {
  var _this = this;

  //@Autowire
  var homePage;

  _this.homeButtonOnClick = function(e) {
    window.location = '#win'
  }

  _this.render = function() {
    let frag = document.createRange().createContextualFragment(_this.homePage.getHtml());
    return frag;
  }

  _this.applyBindings = function() {
    let homeButton = document.getElementById("homeButton");
    homeButton.onclick = _this.homeButtonOnClick;
  }

}

module.exports = Home;
