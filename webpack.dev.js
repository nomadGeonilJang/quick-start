const {merge} = require('webpack-merge');
const common = require("./webpack.common");

const config = {
    mode:'development',
    devServer:{
        //open:true, //실행시 자동으로 오픈
        overlay:true, //에러 발생시 페이지에 나오게
        //historyApiFallback:true //접근 경로를 파악하여 특정페이지로 이동 시킬 수 있다. spa -> index.html
        historyApiFallback:{
            rewrites:[
                {from:/^\/subpage$/,to:'sub.html'},
                {from:/./,to:'404.html'}
            ]
        },
        port:3005
    }
}

module.exports = merge(common, config)