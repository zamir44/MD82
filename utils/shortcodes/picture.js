const Image = require("@11ty/eleventy-img");
const sharp = require("sharp");


module.exports = async function (src, alt, breakWidths, classes = "", style = "", outputFormat = "jpeg") {

  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveImage from: ${src}`);
  }

  const widths = Object.values(breakWidths)

  let stats = await Image(src, {
    widths: widths,
    formats: ["webp", outputFormat],
    urlPath: "/assets/img/",
    outputDir: "./dist/assets/img",
  });

  let lowestSrc = stats[outputFormat][0];

  let lightboxImg = stats[outputFormat][2].url;

  // Generate placeholder image
  const placeholder = await sharp(lowestSrc.outputPath)
    .resize({
      fit: sharp.fit.inside
    })
    .blur()
    .toBuffer();

  // Add base64
  const base64Placeholder = `data:image/png;base64,${placeholder.toString(
    "base64"
  )}`;


  // Iterate over formats and widths
  return `<picture>
      ${Object.values(stats).map(imageFormat => {
    return `<source type="image/${imageFormat[0].format}" data-srcset="${imageFormat.map(entry => `${entry.url} ${entry.width}w`).join(", ")}">`;
  }).join("\n")}
        <img
          data-src="${lowestSrc.url}"
          src="${base64Placeholder}"
          width="${lowestSrc.width}"
          height="${lowestSrc.height}"
          data-light="${lightboxImg}"
          class="lazy ${classes}"
          style="${style}"
          alt="${alt}">
      </picture>`;

};