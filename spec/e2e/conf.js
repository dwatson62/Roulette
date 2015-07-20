exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['RouletteFeatureSpec.js'],
  capabilites: {
    browserName: 'chrome'
  }
}