const path = require('path');
const SRC = path.resolve(__dirname, 'src');
const DST = path.resolve(__dirname, 'public');
module.exports = {
    entry: SRC + '/app.js',
    output: {
        path: DST,
        filename: 'bundle.js'
    }, 
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: DST,
        historyApiFallback: true,
        port: 8081
    }

}