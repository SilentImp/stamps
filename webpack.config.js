var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    all = require('postcss-all-unset'),
    color = require('postcss-color-function'),
    nested = require('postcss-nested'),
    vars = require('postcss-simple-vars'),
    mixin = require('postcss-mixins'),
    imprt = require('postcss-import');

module.exports = {
    debug: false,
    watch: false,
    // devtool: 'inline-source-map',
    entry: [
        path.join(__dirname, 'source/js/app.js'),
        'file?name=index.html!jade-html!./source/index.jade'
    ],
    output: {
        path: path.join(__dirname, 'build/'),
        filename: "js/bundle.js"
    },
    resolve: {
        moduleDirectories: ['node_modules', 'source', 'source/js', 'source/css'],
        extensions: ['', '.js', '.css']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ],
    postcss: function() {
        return [imprt({
            from: path.join(__dirname, 'source/js/components/Helpers/Helpers.css'),
            glob: true
        }), mixin, vars, all, nested, color, autoprefixer({
            browsers: ['last 2 version', 'IE 8', 'IE 9', 'IE 10', 'IE 11', 'Opera 12']
        })];
    },
    module: {
        loaders: [{
            test: /\.jade$/,
            loader: "jade-html-loader"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url?limit=10000!img?progressive=true'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
