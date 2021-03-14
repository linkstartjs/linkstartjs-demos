@DefaultAction(name = "helloWorldAction", entrypoint = "true", route = "hello")

function HelloWorldAction() {

  @Autowire(name = "helloWorldPage")
  this.page;

  @HtmlElement(id = "myLinks")
  this.menuOptionsDivElement;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  this.render = () => {
    return "<h1>Hello World</h1>"
  };

  @ActionListener(tagId = "menuButton", type = "onclick")
  this.menuButtonListener = (e) => {
    console.log("show menu");

    if(this.menuOptionsDivElement.style.display === '' || this.menuOptionsDivElement.style.display === "none"){
      this.menuOptionsDivElement.style.display = "block"
    }else if (this.menuOptionsDivElement.style.display === "block") {
      this.menuOptionsDivElement.style.display = "none";
    }

  };

}

module.exports = HelloWorldAction;
