module.exports = function(eleventyConfig) {
    eleventyConfig.walletLink = 'walletlink'
    eleventyConfig.addShortcode('monetize11ty', function (providerurl, username) {
        return `<meta name="monetization" content="wallet.${providerurl}/${username}">`
    })
};