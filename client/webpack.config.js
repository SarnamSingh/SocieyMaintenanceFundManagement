const path = require('path');
const webpack = require('webpack');

module.exports = {
entry : "./src/index.js",
output : {
    path: path.resolve(__dirname, 'dist/'),
    filename : "bundle.js",
    publicPath : "/dist/"
},
resolve : { extensions: ["*", ".js", ".jsx"]},
module : {
    rules : [
        {
            test :/\.(js|jsx)$/,
            loader : "babel-loader",
            exclude : /(node_modules|bower_components)/,
            options : { presets:["@babel/env"]}
        },
        {
            test : /\.css$/,
            use : ["style-loader", "css-loader"]
        }
    ]
},
plugins: [new webpack.HotModuleReplacementPlugin()],
mode: "development",
devServer : {
contentBase : path.join(__dirname, "public/"),
port : 3000,
hotOnly : true
}

} 
