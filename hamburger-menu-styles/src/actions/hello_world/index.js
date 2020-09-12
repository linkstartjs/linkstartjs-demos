@DefaultAction(name = "helloWorldAction", entrypoint = "true", route = "hello")

function HelloWorldAction() {

  @Render
  @Autowire(name = "helloWorldPage")
  this.page;

  this.onLoad = () => {
    console.log("onLoad: Hello World!!");
  };

  this.afterRender = () => {
    console.log("afterLoad: Hello World!!");

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      hamburgers.forEach(function(hamburger, i) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
  };

}

module.exports = HelloWorldAction;
