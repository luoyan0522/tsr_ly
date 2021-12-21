const path = require("path");
module.exports = {
    pages: {
        index: {
            entry: "examples/main.js", // js入口文件修改
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        // 重新设置目录别名
        config.resolve.alias
            .set("@", path.resolve("examples"))
            .set("~", path.resolve("packages"));
        // 使 examples及packages目录下的js文件都加入编译
        config.module
            .rule("js")
            .include.add("/packages")
            .end()
            .include.add("/examples")
            .end()
            .use("babel")
            .loader("babel-loader");
    },
}