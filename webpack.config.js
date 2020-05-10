const path = require("path")
require("dotenv").config()

console.log(process.env.mode)

module.exports = {
    target : "web",
    mode : process.env.mode || "development",
    entry : path.resolve(__dirname,"src","index.js"),
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    }
}