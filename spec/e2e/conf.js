exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['rouletteFeatureSpec.js'],
  capabilites: {
    browserName: 'chrome'
  }
};