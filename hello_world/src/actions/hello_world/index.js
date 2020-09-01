@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  this.onLoad = () => {
    console.log("I'm the onLoad");
  };

}

module.exports = HelloWorldAction;
