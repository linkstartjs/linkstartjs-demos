@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  @Render
  @Autowire(name="helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  @ActionListener(tagId="clickMeButton", type="onclick")
  this.clickMe = (e) => {
    console.log("You clicked1 me:"+new Date());
  };

  @ActionListener(tagId="clickMeButton2", type="onclick")
  this.clickMe2 = (e) => {
    console.log("You clicked2 me:"+new Date());
  };

  const displayQuote = (aaa) => {
    return x * y
  };

}

module.exports = HelloWorldAction;
