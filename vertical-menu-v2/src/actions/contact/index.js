@DefaultAction(name = "contactAction", route = "contact")
function ContactAction() {

  @Render(id="content")
  @Autowire(name = "contactPage")
  this.page;

  this.onLoad = () => {

  };

}

module.exports = ContactAction;
