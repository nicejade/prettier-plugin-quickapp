"use strict";

const languages = [
  {
    name: "Quickapp",
    since: "1.0.0",
    parsers: ["vue"],
    extensions: [".ux"],
    tmScope: "source.ux",
    aceMode: "text",
    linguistLanguageId: 303,
    vscodeLanguageIds: ["quickapp"]
  }
]

const options = {
}

const printers = {
  quickapp: {}
}

module.exports = {
  languages,
  printers,
  // parsers,
  options,
  defaultOptions: {
    printWidth: 100,
    tabWidth: 2
  }
}