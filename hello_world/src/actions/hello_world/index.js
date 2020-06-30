@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Autowire(name="helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("I'm your onLoad");
    console.log(this.page.getHtml());
  };

  @ActionListener(key="value")
  this.resetCount = () => {
    console.log("I'm your resetCount");
  };

}

module.exports = HelloWorldAction;
