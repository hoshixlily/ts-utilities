const path = require("path");

module.exports = {
    entry: "./index.ts",
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /ts?$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules|tests/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        library: {
            name: ["ts-utilities"],
            type: "umd"
        },
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    }
};
