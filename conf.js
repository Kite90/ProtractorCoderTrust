exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/newPageDemo.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    var AllureReporter = require('jasmine-allure-reporter');
   jasmine.getEnv().addReporter(new AllureReporter({
     resultsDir: 'allure-results'
   }));
  }
}
