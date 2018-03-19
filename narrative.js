#!/usr/bin/env node

var fs = require("fs")
var exec = require("child_process").exec
var path = require("path")

exec(
  "git config --global user.name",
  function(error, stdout) {
    if (error) {
      return console.log(error)
    }
    var moduleName = process.argv[1]
    var description = process.argv[2]
    var author = stdout.replace(/\s/, "").toLowerCase()

    writeProject(moduleName, description, author)
  }
)

function writeProject(name, description, author) {
  console.log("")

  var packageJson = {
    "name": name,
    "version": "0.0.0",
    "description": description,
    "main": name+".js",
    "dependencies": {
      "module-library": "*"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/erikpukinskis/"+name+".git"
    }
  }

  var parts = name.split("-")
  var camel = parts[0] + parts.slice(1).map(capitalize).join("")

  function capitalize(string) {
    return string.substr(0,1).toUpperCase()+string.substr(1)}

  var source = [
    "var library = require(\"module-library\")(require)",
    "",
    "module.exports = library.export(",
    "  \""+name+"\",",
    "  function() {",
    "    function "+camel+"() {",
    "",
    "    }",
    "    return "+camel,
    "  }",
    ")",
    "",
  ].join("\n")

  fs.writeFile(
    path.resolve(__dirname, name+".js"),
    source,
    report.bind(null, "wrote "+name+".js"))

  fs.writeFile(
    path.resolve(__dirname, "package.json"),
    JSON.stringify(
      packageJson,
      null,
      2),
    report.bind(null, "wrote package.json"))

  fs.writeFile(
    path.resolve(__dirname, ".gitignore"),
    "node_modules\n",
    report.bind(null, "wrote .gitignore"))
}

function report(message, error) {
  console.log(error || message)
}
