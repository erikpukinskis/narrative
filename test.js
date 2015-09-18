var library = require("nrtv-library")(require)

library.using(
  ["nrtv-element", "nrtv-element-server", "nrtv-browser-bridge"],
  function(element, Server, Bridge) {

    var sayWhatsUp = Bridge.defineOnClient(
      function yo() {
        alert("hey person what's up!")
      }
    )

    var butt = element("button", {
      onclick: sayWhatsUp.evalable()
    })

    Server.serve(butt)

    Server.start(7654)

    console.log("A narrative is up and running! Visit http://locahost:7654 in your browser to see it!")
  }
)