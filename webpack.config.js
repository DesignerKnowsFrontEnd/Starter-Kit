const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // 3. injects styles into the DOM
                    'css-loader',   // 2. turns css into common js
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [autoprefixer()]
                        }
                      },
                    'sass-loader'  // 1. turns sass into css
                ]
            }
        ]
    }
}
