module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets',
                        },
                    },
                ],
            },
        ],
    },
    // ...
};
