const { alias, configPaths, aliasJest } = require("react-app-rewire-alias")

const aliasMap = configPaths("./jsconfig.paths.json") // or jsconfig.paths.json

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)
