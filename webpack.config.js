const path = require('path');

module.exports = {
    entry: {
        main: './source/index.ts',
        cell: './source/cell.tsx'
    },
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    output: {
        filename: 'build/[name].bundle.js',
        path: path.resolve( "./" ),
        library: {
            type: "module"
        }
    },
    experiments: {
        outputModule: true,
    },
    optimization: {
        minimize: true
    },
    externals: {
        "jsx-dom": "jsx-dom"
    }
};