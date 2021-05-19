module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                win: {
                    icon: '/public/favicon.ico'
                }
            },
        }
    }
}