var library = require("module-library")(require)


// THERE IS NOTHING WRONG WITH PROGRAMMING. WE ARE JUST NOT WRITING PROGRAMS THAT BEGINNERS CAN USE.


library.using(
  ["web-element", "web-site", "browser-bridge"],
  function(element, site, BrowserBridge) {

    var bridge = new BrowserBridge()

    var greet = bridge.defineFunction(
      function greet(name) {
        alert("hi, "+name)
      }
    )

    var button = element(
      "button",
      "Hi there", 
      {onclick: greet.withArgs("Tam").evalable()}
    )

    bridge.asap(function() {
      console.log("Everything is awesome")
    })

    site.addRoute(
      "get",
      "/",
      bridge.requestHandler(button)
    )

    site.start(7654)

    console.log("A narrative is up and running! Visit http://localhost:7654 in your browser to see it!")
  }
)
