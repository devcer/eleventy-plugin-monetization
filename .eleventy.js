eleventyConfig.addShortcode('monetize11ty', function (providerurl, username) {
    return `<meta name="monetization" content="$wallet.${providerurl}/${username}">`
})