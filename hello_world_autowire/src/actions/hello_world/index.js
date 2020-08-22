@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Autowire(name="helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("I'm your onLoad");
    console.log(this.page.getHtml());
  };

}

module.exports = HelloWorldAction;
