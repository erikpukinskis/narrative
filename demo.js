var library = require("module-library")(require)


// THERE IS NOTHING WRONG WITH PROGRAMMING. WE ARE JUST NOT WRITING PROGRAMS THAT BEGINNERS CAN USE.


library.using([
  "web-site",
  "browser-bridge",
  "web-element",
  "basic-styles"],
  function (WebSite, BrowserBridge, element, basicStyles) {
    var site = new WebSite()
    var baseBridge = new BrowserBridge()
    basicStyles.addTo(baseBridge)

    var press = baseBridge.defineFunction(
      function press() {})

    var button = element(
      "button",
      "Press me",{
      "onclick": press.evalable()})

    site.addRoute(
      "get",
      "/",
      baseBridge.requestHandler(button))

    site.start(2043)
  })

