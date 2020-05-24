module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/eleventy-plugin-monetization/dist/monetization.css": "assets/monetization.css",
        "node_modules/eleventy-plugin-monetization/dist/monet.js": "assets/monet.js"
    });
    eleventyConfig.addShortcode('monetize11ty', function (providerurl, username) {
        return `
            <meta name="monetization" content="${providerurl}/${username}">
            <link rel="stylesheet" href="/assets/monetization.css">
            <script type="text/javascript" defer src="/assets/monet.js"></script>
        `
    });
};