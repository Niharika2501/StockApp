const path=require('path');
const express = require('express');


module.exports={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/            
        }]
    },
    devtool:'cheap-module-evel-source-map',
    devServer:{
        proxy: {
            '/api':{ 
                target:'http://localhost:9091',
                secure: false,
                changeOrigin: true
            }
          },
        contentBase:path.join(__dirname,'public')
    }
};