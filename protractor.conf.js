var binaryPath = '';

if (process.platform === 'win32') {
  binaryPath = 'node_modules/phantomjs/lib/phantom/phantomjs.exe';
} else {
  binaryPath = 'node_modules/phantomjs/lib/phantom/bin/phantomjs';
}

exports.config = {
  // Capabilities to be passed to the webdriver instance.
  //chromeDriver: 'node_modules/chromedriver/bin/chromedriver',
  //'browserName': 'chrome',
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': binaryPath,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [
    'test/e2e/pages/basePage.js',
    //'test/e2e/pages/costPage.js',
    //'test/e2e/pages/offersPage.js',
    //'test/e2e/pages/topNavPage.js',
    //'test/e2e/pages/subscribePage.js',
    'src/app/**/*.protractor.spec.js'
  ],

  //suites: {
  //  subscribe: ['test/e2e/pages/*.js', 'src/app/subscribe/*.protractor.spec.js'],
  //  topnav: ['test/e2e/pages/*.js', 'src/app/topnav/*.protractor.spec.js']
  //},

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false
  },

  allScriptsTimeout: 20000
};
