angular.module('ngBoilerPlate.employeeService', ['ngResource'])
.factory('EmployeeService', function($resource){
    var employeeService = $resource('employee-api/v1/employees', {}, {
      get: {
        method: 'GET',
        isArray: true
      },
      post: {
        method: 'POST'
      }
    });


    function getEmployees(cb){
      employeeService.get().$promise.then(function(data){
        cb(data);
      });
    }

    function getEmployee(employeeId, cb){
      employeeService.get({id: employeeId}).$promise.then(function(data){
        cb(data);
      });
    }

    function addEmployee(employee, cb){
      employeeService.add(employee).$promise.then(function(data){
        cb(data);
      });
    }


    return {
      getEmployees: getEmployees,
      addEmployee: addEmployee
    };
  });