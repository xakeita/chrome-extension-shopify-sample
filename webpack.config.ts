import { Configuration } from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

const config: Configuration = {
    entry: {
        content_scripts: path.join(__dirname, 'src', 'content_scripts.tsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'public', to: '.' }]
        }),
        new DotenvWebpackPlugin({
            path: './.env'
        })
    ],
};

export default config;
