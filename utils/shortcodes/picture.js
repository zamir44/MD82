const Image = require("@11ty/eleventy-img");

module.exports = function (src, alt, classes = "") {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveImage from: ${src}`);
  }

  let options = {
    widths: [600, 700, 1200],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/img/",
    outputDir: "./dist/assets/img",
  };

  Image(src, options);

  // get metadata even the images are not fully generated
  let metadata = Image.statsSync(src, options);

  return Image.generateHTML(metadata, {
    class: classes,
    alt,
    sizes: "(min-width: 30em) 50vw, 100vw",
    loading: "lazy",
    decoding: "async",
  });
};
