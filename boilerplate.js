var library = require("module-library")(require)

library.using(
  [library.ref(), "web-site", "browser-bridge", "web-element", "bridge-module", "add-html"],
  function(lib, site, BrowserBridge, element, bridgeModule, addHtml) {

    var bridge = new BrowserBridge()

    var space = bridge.defineFunction(
      [bridgeModule(lib, "add-html", bridge)],
      function(addHtml) {

      }
    )

    var body = element.style(
      "body", {
        "font-family": "sans-serif"})

    bridge.addToHead(
      element.stylesheet(body))

    var page = element()
    
    site.addRoute("get", "/", bridge.requestHandler(page))

    site.start(1414)
  }
)