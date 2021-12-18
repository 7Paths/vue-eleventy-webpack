
const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")


module.exports = env => {
    
    return { 
        performance: { hints: false },
        mode: env.development ? "development" : "production",

        entry: {
            // index: path.resolve(__dirname, "src/scripts/main.js"),
            login: path.resolve(__dirname, "src/scripts/login.js"),
            index: path.resolve(__dirname, "src/scripts/index.js")
        },
        output: {
            path: path.resolve( __dirname, "dist/scripts" ),
            filename: "[name].js"
        },

        resolve: {
            alias: {
                vue: "vue/dist/vue.js",
                App: path.resolve( __dirname, "./app/vue" )
            },
            extensions: [".js"]
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        },
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 300,
            ignored: /node_modules/
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
}