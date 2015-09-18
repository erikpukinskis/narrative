
Narrative is a style of programming that arose from a desire to get code out to its widest possible audience.

A. No modules bigger than 150 lines or so. They should read like a chapter in a book.

B. Instance and development environment are deployed together and dynamically linked to update in real time.

C. Code is programming people too. Reading it should brainwash the reader into making a variation of their own.

D. The debugger is sacred. If an abstraction makes the debugger not work well don't use use it.

E. Only move around the minimum possible data. Like, militantly. Like, if you need 43 out of 68 functions in a module, only send those 43 functions to the client. If you only need the names some things, send an array of strings. Don't send an array of objects just because you had them lying around.

F. As much as possible, do everything in one language. JavaScript is a good candidate because there's a good client runtime and a good server runtime. We try to gobble stuff like CSS and configuration files and scripting all into JavaScript. Makes things easier to jump into.

G. Write programs in the most basic primitives possible. You can do amazing things with just functions and literals.

H. Make sacrifices in order to get the biggest possible platform coverage with the least amount of code. Again, this tends to mean JavaScript. And it means using older tools. Don't use ES6 unless you have to, don't use modern web APIs unless you really need them, write performant code that runs on crappy devices. Again. Functions and literals can do a lot. Don't move data you don't have to. These things all feed together. To get a broad audience with "modern tools" you need a layers of shims, which violates the Minimum Data thing and the Do As Much As You Can In One Language thing. It's not worth it.

I. When choosing between declarative and imperative, lean hard imperative. Declarative code should be reserved for those few times when you really need composition—not chaining, not switches, not nesting... composition. Filesystems are declarative. Don't use them as a programming language.


I guess this should be a demo of the simplest most narrativey thing that I can think of:

```Javascript
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
  }
)
```

The language will definitely be revised a bit, but those abstractions are pretty close to where they need to be for 1.0. Of course things will evolve.

To run that on your computer open up a terminal or a command prompt and type the following magical commands:

    npm install narrative
    node node_modules/narrative/test.js

Narrative is also a social experiment. Could we sustain ourselves entirely though voluntary action? Just how much of the basics of human sustenance can we provide without using the threat of violence?
