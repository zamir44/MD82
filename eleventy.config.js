const initialBaseConfig = require("./base");


module.exports = (config) => {

  // Base config
  initialBaseConfig(config);


  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["md", "njk", "html"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};