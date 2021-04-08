const {merge} = require("webpack-merge")
const common = require("./webpack.common")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 그냥 복붙 해서 사용
const TerserPlugin = require("terser-webpack-plugin");//기본이 터서 사용이기 때문에 

const config = {
    mode:'production',
    plugins:[
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ],
    optimization:{
        runtimeChunk:{
            name:'runtime'
        },
        splitChunks:{
            cacheGroups:{
                defaultVendors:{
                    test:/[\\/]node_modules[\\/]/i,
                    chunks: 'all',
                    name:'vender'
                }
            }
        },
        minimize:true,// TerserWebpackPlugin
        minimizer:[new TerserPlugin({})] //uglyfi나 다른거를 사용하려면 여기에 터서말고 다른거 넣어 주면됩니다.
    }
    
}

module.exports = merge(common, config)