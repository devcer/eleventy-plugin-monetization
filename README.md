# Monetize 11ty

An [Eleventy](https://www.11ty.dev/) plugin to monetize posts and site content by creating exclusive content areas.

## Web Monetization

A JavaScript browser API which allows the creation of a payment stream from the user agent to the website.

[Find out more](https://webmonetization.org/)

## Setting up Web Monetization Provider

For Testing purposes, You will find the [Web Monetization Provider](https://github.com/interledger/web-monetization-extension/) here. You will find instructions to run the extension locally in the README.md file. Hopefully, we will have the extension published soon.

If you would like to generate a sample payment pointer for testing. You could use [rafiki.money](https://rafiki.money/)

## Installation

`npm install eleventy-plugin-monetization`

Add the below to your `.eleventy.js` file:

```javascript
// Monetize
const monetize11ty = require("eleventy-plugin-monetization");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(monetize11ty);
};
```

## Usage

Add the shortcode below to the `<head>` of your 11ty site where you wish to start monetizing. For example, this could be added to the `<head>` of a post [template file](https://www.11ty.dev/docs/data/) or create a monetize template file.

```html
{% monetize11ty "provider_url", "unique_id" %}
```

### Hiding content

Add `id="monetization-exclusive" class="hidden"` to the parent of the content you wish to monetize. This will then hide the content until a monetization plugin is active.

### CTA

Add the below divs just above the `id="monetization-exclusive"` area. This will prompt a user to start a Web Monetization extension in order to show this content.

```html
<div id="monetization-loading" class="monetization--hidden">Loading exclusive content...</div>

<div id="monetization-cta" class="monetization--hidden">
  <p>This content is exclusive to my supporters.</p>
  <p>
    Please install a
    <a href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca?hl=en" target="_blank"
      >Web Monetization extension</a
    >
    to support me!
  </p>
</div>
```

### Complete Example

```html
<div id="monetization-loading" class="monetization--hidden">Loading exclusive content...</div>

<div id="monetization-cta" class="monetization--hidden">
  <p>This content is exclusive to my supporters.</p>
  <p>Please install a Web Monetization provider extension to support me!</p>
</div>

<div id="monetization-exclusive" class="monetization--hidden">
  <p>Exclusive content.</p>
</div>
```
