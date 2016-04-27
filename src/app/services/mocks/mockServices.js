angular.module( 'ngBoilerplate.mockServices', ['ngMockE2E'])
  .run(['$httpBackend' ,function($httpBackend){

    var nobackend = false;


    var URL = {
      'EMPLOYEE_SERVICE': new RegExp('employee-api\\/v[0-9]+\\/employees')
    };

    if (document.URL.match(/nobackend/)) {
      nobackend = true;
      //console.log('mockServices using nobackend');
      var employees = [
        {firstName: 'John', lastName: 'Smith', id: 1},
        {firstName: 'Dave', lastName: 'Johnson', id: 2},
        {firstName: 'Beth', lastName: 'Parker', id: 3},
        {firstName: 'Karl', lastName: 'Karlson', id: 4},
        {firstName: 'Gina', lastName: 'David', id: 5},
        {firstName: 'Bran', lastName: 'Stork', id: 6},
        {firstName: 'Peter', lastName: 'Yorker', id: 7},
        {firstName: 'May', lastName: 'Plume', id: 8},
        {firstName: 'Janelle', lastName: 'Francisco', id: 9},
        {firstName: 'Reggie', lastName: 'Lane', id: 10},
        {firstName: 'Sam', lastName: 'Smith', id: 11},
        {firstName: 'David', lastName: 'Olan', id: 12}
      ];

      $httpBackend.whenGET(URL.EMPLOYEE_SERVICE).respond(function(method, url, data){

        return [200, employees];
      });

      $httpBackend.whenGET(URL.EMPLOYEE_SERVICE).respond(function(method, url, data){
        console.log('data: ', data);
        employees.push(data);
      });

    }else{
      //console.log('mockServices not using nobackend');
    }

}]);
