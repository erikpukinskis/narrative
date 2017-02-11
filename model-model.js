var library = require("module-library")(require)

module.exports = library.export(
  "workspace",
  ["identifiable"],
  function(identifiable) {
    var spaces = {}

    function workspace() {
      var space = {}
      identifiable.assignId(spaces, space)
      spaces[space.id] = space
      return space
    }

    workspace.get = identifiable.getFrom(spaces, "space")
    
    return workspace
  }
)