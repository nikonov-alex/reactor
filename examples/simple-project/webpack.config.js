const path = require('path');

module.exports = {
    entry: './sources/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                type: "asset/source",
                use: [
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.sass'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve( "./app" ),
    },
    optimization: {
        minimize: false
    }
};