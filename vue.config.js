const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
     config.module.rules.delete("svg"); 
    }, 
    configureWebpack: { 
      module: {
         rules: [
           { 
            test: /\.svg$/, 
            loader: "vue-svg-loader",
          // eslint-disable-next-line no-irregular-whitespace
           },
        // eslint-disable-next-line no-irregular-whitespace
         ],
      // eslint-disable-next-line no-irregular-whitespace
       },
    // eslint-disable-next-line no-irregular-whitespace
     },
})
