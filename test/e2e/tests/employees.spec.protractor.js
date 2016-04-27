describe('Employee Listing Page', function(){
  var protractor = require('protractor');

  var page = new protractor.pages.BasePage();
  //var ptor = protractor.getInstance();

  beforeEach(function(){
    page.get('http://localhost:9113/#/employees?nobackend');
  });


  it('should have employees', function(){
    //console.log(page.getEmployees());
    //ptor.wait(3000);
  });



});