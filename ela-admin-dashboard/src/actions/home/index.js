@DefaultAction(name = "homeAction", entrypoint = "true", route = "home")
function HomeAction() {

  @Autowire(name = "homePage")
  this.page;

  this.onLoad = () => {
    console.log("i am the admin dashboard");    
  };

  this.render = () => {
    return this.page.getHtml();
  };  


}

module.exports = HomeAction;
