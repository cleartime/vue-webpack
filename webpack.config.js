module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {

        loaders: [
            {test: /\.styl$/, loader: "style!css!stylus"},
            {test: /\.html$/, loader: "html"},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
    ],
}