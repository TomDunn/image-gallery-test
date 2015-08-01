var path = require('path');

module.exports = {
    entry: './assets/homepage.js',
    output: {
        filename: 'public/homepage.js'
    },

    module: {
        loaders: [
            {test: /\.less$/,   loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/,    loader: 'style-loader!css-loader'}
        ]
    },

    resolve: {
        root: [path.join(__dirname, "bower_components")]
    }
};