const Picture = require("./utils/shortcodes/picture");
const transforms = require('./utils/transforms.js');
const filters = require('./utils/filters.js');

module.exports = function (config) {

    config.setQuietMode(true)

    // Filters 
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName])
    })

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        config.addTransform(transformName, transforms[transformName])
    })

    // Custom Async Shortcodes
    config.addNunjucksAsyncShortcode("Image", Picture);


    // Vanilla Lazy Load
    config.addPassthroughCopy({
        "./node_modules/vanilla-lazyload/dist/lazyload.js": "./assets/js/lazyload.js",
    });

    // Data Merge
    config.setDataDeepMerge(true);

    // Passthrough Files
    config.addPassthroughCopy("src/assets/css/**/*");
    config.addPassthroughCopy("src/assets/js/**/*");
    config.addPassthroughCopy("src/assets/favicon/**/*");

    // Layout Alias
    config.addLayoutAlias("default", "layouts/default.njk");
}