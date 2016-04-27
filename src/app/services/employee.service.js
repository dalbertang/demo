angular.module('ngBoilerPlate.employeeService', ['ngResource'])
.factory('EmployeeService', function($resource){
    var employService = $resource('employee-api/v1/employees', {}, {
      get: {
        method: 'GET',
        isArray: true
      }
    });


    function getEmployees(cb){
      employService.get().$promise.then(function(data){
        cb(data);
      });
    }

    function getEmployee(employeeId, cb){
      employService.get({id: employeeId}).$promise.then(function(data){
        cb(data);
      });
    }


    return {
      getEmployees: getEmployees
    };
  });