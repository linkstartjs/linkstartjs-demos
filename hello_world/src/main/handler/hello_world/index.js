@EventHandler(entrypoint = "true")
function EntrypointHandler() {
  this.onLoad = () => {
    return new Promise(async(resolve, reject) => {
      console.log("I'm the onLoad");
      resolve();
    });    
  };
}
module.exports = EntrypointHandler;
