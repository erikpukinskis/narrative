#!/usr/bin/env node

var library = require("nrtv-library")(require)

library.using(
  ["nrtv-element", "nrtv-element-server", "nrtv-browser-bridge"],
  function(element, server, bridge) {

    var sayWhatsUp = bridge.browser.define(
      function yo() {
        alert("hey person what's up!")
      }
    )

    var butt = element(
      "button",
      {onclick: sayWhatsUp.evalable()},
      "Press me"
    )

    server.serve(butt)

    server.start(7654)

    console.log("A narrative is up and running! Visit http://localhost:7654 in your browser to see it!")
  }
)