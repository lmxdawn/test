#安装

首先要安装 Node.js， Node.js 自带了软件包管理器 npm，Webpack 需要 Node.js v0.6 以上支持，建议使用最新版 Node.js。

用 npm 安装 Webpack：

```
 $ npm install webpack -g
```
此时 Webpack 已经安装到了全局环境下，可以通过命令行 webpack -h 试试。

通常我们会将 Webpack 安装到项目的依赖中，这样就可以使用项目本地版本的 Webpack。

```
# 进入项目目录
# 确定已经有 package.json，没有就通过 npm init 创建
# 安装 webpack 依赖
$ npm install webpack --save-dev

```

Webpack 目前有两个主版本，一个是在 master 主干的稳定版，一个是在 webpack-2 分支的测试版，测试版拥有一些实验性功能并且和稳定版不兼容，在正式项目中应该使用稳定版。

```
# 查看 webpack 版本信息
$ npm info webpack

# 安装指定版本的 webpack
$ npm install webpack@1.12.x --save-dev

```


#使用

 > 首先创建一个静态页面 index.html 和一个 JS 入口文件 entry.js：

```html
<!-- index.html -->
    <html>
      <body>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
```

```javascript
// entry.js
document.write('It works.')
```


 > 然后编译 entry.js 并打包到 bundle.js：

```bash
$ webpack entry.js bundle.js
```

 > 打包过程会显示日志：

```bash
Hash: e964f90ec65eb2c29bb9
Version: webpack 1.12.2
Time: 54ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.42 kB       0  [emitted]  main
   [0] ./entry.js 27 bytes {0} [built]
```

 > 用浏览器打开 index.html 将会看到 It works. 。

 > 接下来添加一个模块 module.js 并修改入口 entry.js：


```javascript
// module.js
module.exports = 'It works from module.js.'
```

```javascript
// entry.js
document.write('It works.')
document.write(require('./module.js')) // 添加模块
```

 > 重新打包 webpack entry.js bundle.js 后刷新页面看到变化 It works.It works from module.js.

```bash
Hash: 279c7601d5d08396e751
Version: webpack 1.12.2
Time: 63ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.57 kB       0  [emitted]  main
   [0] ./entry.js 66 bytes {0} [built]
   [1] ./module.js 43 bytes {0} [built]
```

    Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。

#打包CSS

    安装 css-loader , style-loader 模块
    其他模块：http://webpack.github.io/docs/loader-conventions.html

    .css 文件使用 style-loader 和 css-loader 来处理
    .js 文件使用 jsx-loader 来编译处理
    .scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
```bash
$ npm install css-loader --save or $ npm install css-loader --save-dev
```

    添加文件 style.css

```bash
vim css/style.css

body{
    font-size: 36px;
}
```

```bash
更新 entry.js

require("!style!css!./css/style.css");
document.write(require("./content.js"));
```

Run一下
```bash
$ webpack ./entry.js bundle.js --colors
```


# 使用 webpack.config.js

    每个项目下都必须配置有一个 webpack.config.js ，它的作用如同常规的 gulpfile.js/Gruntfile.js ，就是一个配置项，告诉 webpack 它需要做什么。

```bash
vim webpack.config.js

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

> Now we can just run
```bash
$ webpack
```

      webpack 命令会优先读取项目中的 webpack.config.js 文件
 
 
# 开发服务器

```bash
$ npm install webpack-dev-server -g
$ webpack-dev-server --progress --colors
```

服务器可以自动生成和刷新，修改代码保存后自动更新画面

  http://localhost:8080/webpack-dev-server/bundle 
  
  
  
# 使 css 剥离 js 文件, 将 css 单独打包。

依赖插件 
```bash
$ npm install --save-dev extract-text-webpack-plugin #先安装再使用
```

```javascript

    var ExtractTextPlugin = require('extract-text-webpack-plugin');

    
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")}
        ]
    }

    //在 plugins 中配置
    plugins: [ new ExtractTextPlugin('[name].css') ]

```

    把 css 单独打包出来，免得以后只修改 css 导致 浏览器端 js 的缓存也失效了。这里使用了 contenthash, webpack 会按照内容去生成 hash 值。


# 压缩, 去除注释


    注意如果开启了source-map选择inline-source-map压缩后依然好几MB的

```javascript


    //在 plugins 中添加
    new webpack.optimize.UglifyJsPlugin({
        comments: false,        //去掉注释
        compress: {
            warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
        }
    })
    
```

    最好开启去掉代码注释。代码压缩后提升简直不是一点两点的……
    
# 开启 gzip 压缩

    依赖插件 
```bash
    npm install --save-dev compression-webpack-plugin
```

git 地址：[compression-webpack-plugin](https://github.com/webpack/compression-webpack-plugin)


```javascript

    var CompressionWebpackPlugin = require('compression-webpack-plugin');

    //在 plugin 中添加
    new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css)$'    //压缩 js 与 css
        ),
        threshold: 10240,
        minRatio: 0.8
    })

```
    

    这个就很满意……

    
# 压缩 html, 自动添加上面生成的静态资源。

    依赖插件 
```bash

    npm install --save-dev html-webpack-plugin
```

git 地址：html-webpack-plugin

```javascript

    var HtmlWebpackPlugin = require('html-webpack-plugin');
    
    new HtmlWebpackPlugin({
        filename: 'react.html',    //生成的文件，从 output.path 开始 output.path + "/react.html"
        template: '../client/react.html',  //读取的模板文件,这个路径是相对于当前这个配置文件的
        inject: true, // 自动注入
        minify: {
            removeComments: true,        //去注释
            collapseWhitespace: true,    //压缩空格
            removeAttributeQuotes: true  //去除属性引用
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        //必须通过上面的 CommonsChunkPlugin 的依赖关系自动添加 js，css 等
        chunksSortMode: 'dependency'
    })

```

     这样就大功告成了, css，js 开启 gzip 压缩后, 会将生成的文件名自动注入到 html 中。 如果有多个 html 配置再添加一个 new HtmlWebpackPlugin() 即可。
## 小结

   1. 确定不会在生产环境打包多余的代码, 比如 热加载 只是举个例子

   2. 检查只在 dev 使用的配置,在生产环境将其去掉. 可使用配置文件，灵活配置，灵活切换

   3. 去除所有注释, 压缩所有可压缩的资源文件.

   4. 开启 gzip压缩.

    

    
    
    
    
    
    
    
    
    