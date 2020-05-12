module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode('monetize11ty', function (providerurl, username, enable) {
        return `<meta name="monetization" content="${providerurl}/${username}">
            {% if ${enable} == "true" %}
                Testing
            {% endif %}`
    })
};