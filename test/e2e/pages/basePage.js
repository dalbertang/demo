protractor.pages ? "" : protractor.pages = {};

protractor.pages.BasePage = function () {

console.log('lskjflsj');

  this.scrollIntoView = function(elemFinder) {
    var promise = browser.executeScript(function(elem) {
      elem.scrollIntoView(false);
    }, elemFinder);
    return promise;
  };


  this.getCurrentUrl = function getCurrentUrl(){
    return browser.driver.getCurrentUrl();
  };

  this.waitForUrl = function(url){
    browser.driver.wait(function() {
      return getCurrentUrl().then(function(currentUrl) {
        var regexUrl = url.replace(/\-/, '\\-');
//        console.log('regexUrl: ' + regexUrl + ' | ' + currentUrl + ' | ');
        return (new RegExp(regexUrl)).test(currentUrl);
      });
    });
  };

};