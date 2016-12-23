var library = require("module-library")(require)

module.exports = library.export(
  "workspace",
  function() {
    var spaces = {}

    function workspace() {
      var space = {}
      assignId(space)
      spaces[space.id] = space
      return space
    }

    function assignId(space) {
      do {
        var id = Math.random().toString(36).split(".")[1].substr(0,4)
      } while (spaces[id])

      space.id = id
    }

    function get(ref) {
      if (!ref) {
        throw new Error("No ref!")
      }

      if (typeof ref == "string") {
        var space = spaces[ref]
      } else {
        var space = ref
      }

      if (!space) {
        throw new Error("No space "+ref)
      }

      return space
    }
    
    return workspace
  }
)