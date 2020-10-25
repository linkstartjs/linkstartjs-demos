@DefaultAction(name = "newsAction", route = "news")
function NewsAction() {

  @Render(id="content")
  @Autowire(name = "newsPage")
  this.page;

  this.onLoad = () => {
    
  };

}

module.exports = NewsAction;
