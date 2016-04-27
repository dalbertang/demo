protractor.pages ? "" : protractor.pages = {};

protractor.pages.EmployeesPage = function() {
  var pageContainer = element(by.css('.employees-container'));


};

protractor.pages.EmployeesPage.prototype = new protractor.pages.BasePage();