@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Render
  @Autowire(name="helloWorldPage")
  this.page;

  @HtmlElementsAllForOne
  this.user;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  @ActionListener(tagId="sendButton", type="onclick")
  this.sendButtonListener = (e) => {
    console.log("You clicked me at:"+new Date());
    console.log(this.user);
  };

}

module.exports = HelloWorldAction;
