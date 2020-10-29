@DefaultAction(name = "homeAction", entrypoint = "true", route = "home")
function HomeAction() {

  @Render
  @Autowire(name = "homePage")
  this.page;

  this.onLoad = () => {
    console.log("i am the admin dashboard");
  };


}

module.exports = HomeAction;
