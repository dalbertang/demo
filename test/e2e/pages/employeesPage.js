protractor.pages ? "" : protractor.pages = {};

protractor.pages.EmployeesPage = function() {
  var pageContainer = element(by.css('.employees-container'));

  var employeesTable = pageContainer.element(by.css('.employee-list'));


  this.getEmployees = function(){
    var employees = element(by.model('employees'));
    return employees;
  };

};

protractor.pages.EmployeesPage.prototype = new protractor.pages.BasePage();