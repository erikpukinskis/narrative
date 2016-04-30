




var library = require("nrtv-library")(require)

library.using(
  ["nrtv-server"],
  function(server) {

    server.addRoute(
      "get",
      "/",
      server.sendPage("hi")
    )

  }
)


// THERE IS NOTHING WRONG WITH PROGRAMMING. WE ARE JUST NOT WRITING PROGRAMS THAT BEGINNERS CAN USE.


library.using(
  ["nrtv-element", "nrtv-server"],
  function(element, server) {

    var title = element("h1", "Hello")

    server.addRoute(
      "get",
      "/",
      server.sendPage(title)
    )

  }
)




library.using(
  ["nrtv-browser-bridge", "nrtv-element", "nrtv-server"],
  function(element, server, bridge) {

    var hi = bridge.defineFunction(
      function yo() {
        alert("hey person what's up!")
      }
    )

    var button = element(
      "button",
      {onclick: hi.evalable()},
      "Press me"
    )

    server.addRoute(
      "get",
      "/",
      bridge.sendPage(button)
    )

    server.start(7654)

    console.log("A narrative is up and running! Visit http://localhost:7654 in your browser to see it!")
  }
)
