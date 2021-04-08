const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require("webpack")


const isProduction = process.env.NODE_ENV === 'PRODUCTION'
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'[name].[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.css/i,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader // style-loader를 대체 한다.
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            },{
                test:/\.hbs/i,
                use:['handlebars-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            title:'Hello World',
            template:path.resolve(__dirname,'index.hbs'), //트정파일 기준으로 html파일 생성
            meta:{
                viewport:"width=device-width, initial-scale=1.0"
            },
            minify:isProduction ? {
                collapseWhitespace:true,
                removeComments:true,
                useShortDoctype:true,
                removeScriptTypeAttributes:true
            } : false
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION:isProduction
        })//전역 상수 값을 정의해서 사용할 수 있습니다.
    ],
}