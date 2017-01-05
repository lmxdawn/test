# 配置文件

### npm配置
```json
{
  "name": "1.0",
  "version": "1.0.0",
  "description": "A simple webpack example.",
  "main": "bundle.js",
  "scripts": {
        "watch": "webpack --progress --colors --watch",//监听文件的变化并执行编译，npm run watch
        "test": "echo \"Error: no test specified\" && exit 1",
        "postcss": "postcss --config postcss.json"//postcss 自动编译的配置文件
  },
  "keywords": [
    "webpack"
  ],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "compression-webpack-plugin": "^0.3.2",//gzip 压    缩
    "autoprefixer-loader": "^3.2.0",//css自动加浏览器前缀，w3c标准
    "babel-core": "^6.14.0",//编译js的
    "babel-loader": "^6.2.5",//编译js的
    "babel-preset-es2015": "^6.14.0",//编译es6到es5
    "babel-preset-react": "^6.11.1",//编译jsx
    "clean-webpack-plugin": "^0.1.10",//清空文件
    "css-loader": "^0.23.1",//压缩css
    "extract-text-webpack-plugin": "^1.0.1",//这个应该是不打包css用的
    "file-loader": "^0.8.5",//处理文件的
    "html-loader": "^0.4.3",//处理html的
    "html-webpack-plugin": "^2.9.0",//html模板
    "jquery": "^3.1.1",//jquery模块
    "less": "^2.6.0",//less核心
    "less-loader": "^2.2.2",//编译less
    "postcss-px2rem": "^0.3.0",//px转换rem
    "react": "^15.3.2",//react核心
    "react-dom": "^15.3.2",//react-dom核心
    "style-loader": "^0.13.0",//装载机
    "url-loader": "^0.5.7",//类似file-loader，可以设置文件大小转换url数据
    "webpack": "^1.12.13",
    "webpack-dev-server": "^1.16.1"
  },
  "dependencies": {
    "extract-text-webpack-plugin": "^1.0.1"
  }
}
```


### webpack 配置

```javascript

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);//根目录
const APP_PATH = path.resolve(ROOT_PATH, 'app');//源文件目录
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');//目标输出目录
// css 剥离 js 文件, 将 css 单独打包。
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// gzip 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const px2rem = require('postcss-px2rem');

module.exports = {
        entry: {//入口，默认index.js
            app:APP_PATH,
            vendor: ['jquery','react','react-dom']//单独打包的
        },
        output: {//输出配置
            path: BUILD_PATH,
            publicPath: "./",
            filename: 'bundle.js'
        },
        resolve:{
            //自动补全的文件后缀
            extensions:['','.js','.json']
        },
        plugins: [
            new CleanPlugin('build'),//清空bulid
            // 压缩 js/css
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,  // remove all comments
                },
                compress: {
                    warnings: false
                },
                except: ['$super', '$', 'exports', 'require'] //排除关键字
            }),

            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify('production')
                }
            }),

            new webpack.ProvidePlugin({//提供全局
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery":"jquery",
                React:"react",
                ReactDom:"react-dom"
            }),

            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),//将入口中的vendor打包

            // js.css 分离
            new ExtractTextPlugin('[name].css'),

            //gzip 压    缩
            new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(js|css)$'    //压缩 js 与 css
                ),
                threshold: 10240,
                minRatio: 0.8
            }),

            // 生成 html
            new HtmlWebpackPlugin({
                template: APP_PATH+'\\index.html',
                inject: 'true'
            }),

        ],
        postcss: () => {
            return [px2rem({remUnit: 64})]; //以64位基准去px 2 rem
        },
        module: {
            loaders: [
                {
                    //加入css
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader","postcss-loader")
                },
                {
                    //less的编译和加前缀
                    test: /\.less/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader","less-loader","postcss-loader")
                },
                {
                    //jsx/js 文件的编译 主要为了 es6 的语法支持 es5
                    test: /(\.jsx|\.js)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    },
                },
                {
                    //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                    //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                    test: /\.html$/,
                    loader: "html?-minimize&attrs=img:src img:data-src"
                },
                {
                    //文件加载器，处理文件静态资源
                    test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader?name=./fonts/[name].[ext]'
                },
                {
                    //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                    //如下配置，将小于xxxbyte的图片转成base64码
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
                },
                {
                    test: /\.json$/,
                    loader: 'file-loader?name=./[name].[ext]'
                },
            ]
        }
}


```


