const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass:{
                includePaths: [path.join(__dirname, 'styles')]
            }
        }
    },
    // lib 打包时默认不会打包vue，已经通过webpack打包为external package
    // configureWebpack: config => {
    //     config.externals = {
    //         vue: 'Vue'
    //     }
    // }
}