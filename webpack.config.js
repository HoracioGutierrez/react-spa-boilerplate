const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
require("dotenv").config()

module.exports = {
    target : "web",
    mode : process.env.mode || "development",
    entry : path.resolve(__dirname,"src","index.js"),
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname,"public","index.html"),
            minify : {
                removeAttributeQuotes : true,
                removeComments : true,
                collapseWhitespace : true
            }
        })
    ]
}