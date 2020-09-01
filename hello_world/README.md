
![logo](https://raw.githubusercontent.com/jrichardsz/static_resources/master/linkstart/linkstart-533X300.png)

# Hello World example

This example demonstrates how create a simple Action which is activated when user enter to some route.

When the application starts, the framework detect any `@DefaultAction` in src folder, instantiating and configuring them.

**src/actions/hello_world/index.js**
```js
@DefaultAction(name="helloWorldAction", entrypoint="true", route="hello"  )
function HelloWorldAction() {

  this.onLoad = () => {
    console.log("I'm the onLoad");
  };

}

module.exports = HelloWorldAction;
```

`@DefaultAction` tells to LinkStart that this simple js module must be related to some route

`route="hello"` tells to LinkStart the value of route. If this app is running over http://localhost:1234, the route which will trigger the **HelloWorldAction** is http://localhost:1234#hello

`entrypoint="true"` tells to LinkStart that default home page http://localhost:1234 must be trigger the **HelloWorldAction**

# @DefaultAction methods

**onLoad**

This method will be the first to be invoked when action is triggered.
