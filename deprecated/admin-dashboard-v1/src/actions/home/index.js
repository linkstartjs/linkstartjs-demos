@DefaultAction(name = "homeAction", entrypoint = "true", route = "home")

function HomeAction() {

  @Render
  @Autowire(name = "homePage")
  this.homePage;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };
}

module.exports = HomeAction;
