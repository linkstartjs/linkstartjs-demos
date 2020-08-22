@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Render
  @Autowire(name="helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

}

module.exports = HelloWorldAction;
