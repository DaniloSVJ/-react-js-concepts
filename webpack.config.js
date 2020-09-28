const path = require('path')

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'), //utilizado para não da problema em caminhos
    output: { //qual arquivo vai ser gerado depois de convertido
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:  path.resolve(__dirname,'public'),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },

            {
                test:/\.css$/,
                exclude: /node_module/,
                use:[
                    
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                ]
            },
            {
                test:/.*\.(gif|png|jpe?g$)/i,
                
                use:{
                    loader: 'file-loader'
                }
            },
            
        ]
    },
}