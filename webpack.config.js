const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.css/i,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            injectType:'singletonStyleTag' //tag를 하나로 함칠 수 있다
                        }
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
        new HTMLWebpackPlugin({
            title:'Hello World',
            template:path.resolve(__dirname,'index.hbs'), //트정파일 기준으로 html파일 생성
            meta:{
                viewport:"width=device-width, initial-scale=1.0"
            }

        })
    ]
    
}