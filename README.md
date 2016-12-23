
**Narrative Programming** is a style of programming that arose from a desire to get code out to its widest possible audience.

A. No modules bigger than 150 lines or so. They should read like a chapter in a book.

B. Instance and development environment are deployed together such that running code is updated continuously as you make changes.

C. As much as possible, do everything in one language. JavaScript is nice because both client and server runtimes are widely distributed. Try to gobble stuff like CSS and configuration files and scripting all into JavaScript, inside modules. The fewer languages people have to learn, the more people can dive in.

D. The debugger is sacred. If an abstraction makes the debugger not work well don't use use that abstraction. (No ES6, no fibers, no transcompilation)

E. Only move around the minimum possible data. Like, militantly. Like, if you need 43 out of 68 functions from a module, only send those 43 functions to the client. If you only need some names, don't send an array of objects just because you have them lying around.

F. Write programs in the most basic primitives possible. You can do amazing things with just functions and literals.

G. Variables should describe what they are. Functions should describe what they do. If you need a comment to do either of those things, or to disambiguate names, change the name to be more self explanatory and less ambiguous. Better to say parentExpressionId than to say parent and have to wonder what the type is and whether it's an id or an object. Try to do as much as possible in using names that are meaningful to the module's human users.

H. When choosing between declarative *(here is how I want this to fit together, computer please take care of it)* and imperative *(do this, then that)*, lean towards imperative. Declarative code should be reserved for those few times when you really need composition<sup>1</sup>.


## Demo

Nrtv is a Javascript toolkit for writing programs this way. Here's a  simple narrative built with it:

```javascript
var library = require("module-library")(require)

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
  }
)
```

To try it on your computer open up a terminal or a command prompt and type the following magical commands:

    npm install narrative
    node node_modules/narrative/demo

## Why

I am tired of having to keep giant repositories full of side-effects in my head. I want to feel like parts of my codebases are solidifying into high quality stable code, and being serious about boundaries forces me to make that happen.

I am also tired of only being able to talk about my work with computer science professionals. I want to be able to involve more casually interested people, who maybe have an afternoon but not several months to learn a complex development flow.

And I am also kind of sick of feeling like I have some sort of advantage over everyone because I have this arcane skill of programming. I want my code to be facilitating lots of other peoples' cool stuff. I don't want it locked in my proprietary repositories.

And narrative programming also is a social experiment. Can a fabric of human-readable software provide enough coordination that we could sustain ourselves entirely though voluntary action? Just how many of the ingredients for human sustenance can we pull together without using the threat of violence?

I hope Nrtv can be accessible enough to facilitate that.

*<sup>1</sup> Composition does not mean chaining<sup>2</sup>, or switches<sup>3</sup>, or nesting<sup>4</sup>. Composition, like, projecting data structures onto each other.*

*<sup>2</sup> Every build file with a massive tree of configuration flags*

*<sup>3</sup> Every command line tool ever*

*<sup>4</sup> Giant web app router files*

*<sup>5</sup> Filesystems are declarative. Don't use them as a programming language.*

*<sup>6</sup> Promises are declarative. They break D, E, I, and F, and are generally not necessary. It takes time to clarify your concurrency model, and promises, fibers, etc don't really help. They just make it easy to write baffling control flows. Take the time to clarify things and callbacks are almost always plenty powerful enough. Again, functions and literals first.*


## Core modules

    module-library
    web-element
    web-site
    browser-bridge
    make-request
    run-test
    function-call
    add-html
    basic-styles
