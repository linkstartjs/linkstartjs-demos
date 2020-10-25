@DefaultAction(name = "homeAction", entrypoint = "true", route = "home")
function HomeAction() {

  @Render
  @Autowire(name = "homePage")
  this.page;

  @HtmlElement(id = "menu")
  this.menuOptionsDivElement;

  this.onLoad = () => {

  };

  @ActionListener(tagId = "menuButton", type = "onclick")
  this.menuButtonListener = (e) => {

    if(this.menuOptionsDivElement.style.display === '' || this.menuOptionsDivElement.style.display === "none"){
      this.menuOptionsDivElement.style.display = "block"
    }else if (this.menuOptionsDivElement.style.display === "block") {
      this.menuOptionsDivElement.style.display = "none";
    }

  };

  @ActionListener(tagId = "newsMenu", type = "onclick")
  this.menuNewsListener = (e) => {
    LinkStartRoute.goTo("news");
  };

  @ActionListener(tagId = "contactMenu", type = "onclick")
  this.menuContactListener = (e) => {
    LinkStartRoute.goTo("contact");
  };

}

module.exports = HomeAction;
