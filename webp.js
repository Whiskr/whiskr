let imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  outputFolder = './client/src/styles', // Output folder
  PNGImages = './client/src/styles/*.png', // PNG images
  JPEGImages = './client/src/styles/*.jpg'; // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
    lossless: true, // Losslessly encode images
  })],
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 65, // Quality setting from 0 to 100
  })],
});
