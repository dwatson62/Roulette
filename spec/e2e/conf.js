exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['bower_components/angular-mocks/angular-mocks.js', 'rouletteTableFeatureSpec.js'],
  capabilites: {
    browserName: 'chrome'
  }
};