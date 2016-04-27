angular.module( 'ngBoilerplate.mockServices', ['ngMockE2E'])
  .run(['$httpBackend' ,function($httpBackend){

    var nobackend = false;


    var URL = {
      'EMPLOYEE_SERVICE': new RegExp('employee-api\\/v[0-9]+\\/employees')
    };

    if (document.URL.match(/nobackend/)) {
      nobackend = true;
      console.log('mockServices using nobackend');

      $httpBackend.whenGET(URL.EMPLOYEE_SERVICE).respond(function(method, url, data){
        var employees = [
          {firstName: 'John', lastName: 'Smith', id: 1},
          {firstName: 'Dave', lastName: 'Johnson', id: 2},
          {firstName: 'Beth', lastName: 'Parker', id: 1},
          {firstName: 'Karl', lastName: 'Karlson', id: 1},
          {firstName: 'Gina', lastName: 'David', id: 1},
          {firstName: 'Bran', lastName: 'Stork', id: 1},
          {firstName: 'Peter', lastName: 'Yorker', id: 1},
          {firstName: 'May', lastName: 'Plume', id: 1},
          {firstName: 'Janelle', lastName: 'Francisco', id: 1},
          {firstName: 'Reggie', lastName: 'Lane', id: 1},
          {firstName: 'Sam', lastName: 'Smith', id: 1},
          {firstName: 'David', lastName: 'Olan', id: 1}
        ];

        return [200, employees];
      });

    }else{
      console.log('mockServices not using nobackend');
    }

}]);
