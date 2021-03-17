const path = require("path");

module.exports = {
  entry: {
    buildIndex: "./src/buildIndex.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname + "/bin")
  }
};
