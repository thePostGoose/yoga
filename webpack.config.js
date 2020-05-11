const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }
    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin,
            new TerserWebpackPlugin
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/index.js'
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true
                    }
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    }, 'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    }, 'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_moduls/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img'
                }
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'logo'
                }
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            },
        ]
    }
}



// const path = require('path')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const {
//     CleanWebpackPlugin
// } = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports = {
//     mode: 'development',
//     entry: './src/js/index.js',
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new CleanWebpackPlugin(),
//         new MiniCssExtractPlugin({
//             filename: './css/bundle.css'
//         }),
//     ],
//     module: {
//         rules: [{
//                 test: /\.css$/,
//                 use: [{
//                     loader: MiniCssExtractPlugin.loader,
//                     options: {
//                         hmr: process.env.NODE_ENV === 'development',
//                     },
//                 }, 'css-loader']
//             },
//             {
//                 test: /\.(png|jpg)$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                     outputPath: 'img'
//                 }
//             },
//             {
//                 test: /\.svg$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                     outputPath: 'logo'
//                 }
//             },
//             {
//                 test: /\.ttf$/,
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                     outputPath: 'fonts'
//                 }
//             },
//         ]
//     }
// }