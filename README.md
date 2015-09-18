
Narrative is a style of programming that arose from a desire to get code out to its widest possible audience.

A. No modules bigger than 150 lines or so. They should read like a chapter in a book.

B. Instance and development environment are deployed together and dynamically linked to update in real time.

C. Code is programming people too. Reading it should brainwash the reader into making a variation of their own.

D. The debugger is sacred. If an abstraction makes the debugger not work well don't use use that abstraction.

E. Only move around the minimum possible data. Like, militantly. Like, if you need 43 out of 68 functions from a module, only send those 43 functions to the client. If you only need some names, don't send an array of objects just because you have them lying around.

F. As much as possible, do everything in one language. JavaScript is nice because both client and server runtimes are widely distributed. Try to gobble stuff like CSS and configuration files and scripting all into JavaScript. The fewer languages people have to learn, the more learners can dive in.

G. Write programs in the most basic primitives possible. You can do amazing things with just functions and literals.

H. Make sacrifices in order to get the biggest possible platform coverage with the least amount of code. That usually means using slightly older tools. Don't use ES6 unless you have to, don't use modern web APIs unless you really need them, write performant code that runs on crappy devices.

(Again. Functions and literals can do a lot. Don't move data you don't have to. These things all feed together. To get a broad audience with "modern tools" you need a layers of shims, which violates the Minimum Data thing and the Do As Much As You Can In One Language thing. It's not worth it.)

I. When choosing between declarative *(here is how I want this to fit together, computer please take care of it)* and imperative *(do this, then that)*, lean towards imperative. Declarative code should be reserved for those few times when you really need composition—not chaining<sup>1</sup>, not switches<sup>2</sup>, not nesting<sup>3</sup>... composition. Filesystems are declarative. Don't use them as a programming language.

### Demo

Nrtv is a Javascript toolkit for writing programs this way. Here's a  simple narrative built with it:

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

The language and syntax will be revised a bit, but those abstractions are pretty close to where they need to be to get some people coding. Of course things will evolve.

To run that on your computer open up a terminal or a command prompt and type the following magical commands:

    npm install narrative
    node node_modules/narrative/test.js

### Why

Narrative is also a social experiment. Can a fabric of human-readable software provide enough coordination that we could sustain ourselves entirely though voluntary action? Just how many of the ingredients for human sustenance can we pull together without using the threat of violence?

*<sup>1</sup> every build system with a massive tree structure of configuration data*

*<sup>2</sup> every command line tool ever*

*<sup>3</sup> giant web app router files*
