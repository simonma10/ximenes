
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'cheap-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/\$.test.js$/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1']
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {

        historyApiFallback: true,
        contentBase: './'
    }

};

/*

 'Access-Control-Max-Age': '3600',
 headers:{
 'Access-Control-Allow-Origin': 'http://localhost:8080',
 'Access-Control-Allow-Credentials': 'true',
 'Access-Control-Allow-Headers': 'Content-Type, app_id, app_key, Authorization, x-id, Content-Length, X-Requested-With',
 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
 'app_id': "c383587a",
 'app_key': "95368b10bc2e607c6b68855ffb202afa"
 },
 //host:"192.168.0.14",
 */