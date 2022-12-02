const Picture = require("./utils/shortcodes/picture");
const transforms = require("./utils/transforms.js");

module.exports = function (config) {
  config.setQuietMode(true);

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
  });

  // Custom Async Shortcodes
  config.addNunjucksShortcode("Image", Picture);

  // Data Merge
  config.setDataDeepMerge(true);

  // Passthrough Files
  config.addPassthroughCopy("src/assets/css/**/*");
  config.addPassthroughCopy("src/assets/static/**/*");
  config.addPassthroughCopy("src/assets/favicon/**/*");

  // Layout Alias
  config.addLayoutAlias("default", "layouts/default.njk");
};
