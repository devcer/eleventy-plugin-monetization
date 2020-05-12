## Monetize 11ty 

An [Eleventy](https://www.11ty.dev/) plugin to monetize posts and site content by creating exclusive content areas.

### Web Monetization

A JavaScript browser API which allows the creation of a payment stream from the user agent to the website.

[Find out more](https://webmonetization.org/)

### Setup Coil to take payments

1. Create an account at [coil.com](https://coil.com/).
2. Start Monetizing by [becoming a creator](https://coil.com/creator).
3. Once set up go to you [Monetize Content](https://coil.com/settings/monetize) in settings.
4. Here you'll see your wallet URL in the meta tag.
5. The `provider_url` will be something like `$coil.xrptipbot.com` depending how you chose to be paid.
6. The `unique_id` is everything after the `/`. **DO NOT** include the `/` in your `provider_url` or `unique_id`. 

### Installation

`npm install eleventy-plugin-monetization`

Add the below to your `.eleventy.js` file:

```
// Monetize 
const monetize11ty = require("eleventy-plugin-monetization");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin( monetize11ty )
};
```

### Usage

Add the shortcode below to the `<head>` of your 11ty site where you wish to start monetizing. For example, this could be added to the `<head>` of a post [template file](https://www.11ty.dev/docs/data/) or create a monetize template file.

```
{% monetize11ty "provider_url", "unique_id" %}
```

#### Hiding content

Add `id="monetization-exclusive" class="hidden"` to the parent of the content you wish to monetize. This will then hide the content until a monetization plugin is active.

#### CTA 

Add the below divs just above the `id="monetization-exclusive"` area. This will prompt a user to start a Web Monetization extension in order to show this content.

```
<div id="monetization-loading" class="body__section body__section--post monetization--hidden">
  Loading exclusive content...
</div>

<div id="monetization-cta" class="body__section body__section--post monetization--hidden">
  <p>
    This content is exclusive to my supporters.
  </p>
  <p>
    Please install a <a href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca?hl=en" target="_blank">Web Monetization extension</a> to support me!
  </p>
</div>
```