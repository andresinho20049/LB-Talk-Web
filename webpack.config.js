

module.exports = {
    // ...
    resolve: {
        fallback: {
            os: require.resolve('os-browserify/browser'),
            util: require.resolve("util/")
        }
    },
    plugins: [
        require("node-polyfill-webpack-plugin")
    ]
    // ...
}