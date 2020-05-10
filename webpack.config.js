const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
require("dotenv").config()

module.exports = {
    target : "web",
    devServer : {
        open : true
    },
    mode : process.env.mode || "development",
    entry : path.resolve(__dirname,"src","index.js"),
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    resolve : {
        extensions : [".js",".jsx"]
    },
    module : {
        rules : [
            {
                test : /\.js|jsx$/,
                exclude : /node_modules/,
                use : "babel-loader"
            }
        ]
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