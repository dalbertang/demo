angular.module( 'ngBoilerplate.employees', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'employees', {
    url: '/employees',
    views: {
      "main": {
        controller: 'EmployeesCtrl',
        templateUrl: 'employees/employees.tpl.html'
      }
    },
    data:{ pageTitle: 'Our Staff' }
  });
})

.controller( 'EmployeesCtrl', function EmployeesCtrl( $scope, EmployeeService) {

    $scope.employees = [];

    EmployeeService.getEmployees(function(data){
      if (data !== null){
        console.log(data);
        $scope.employees = data;
      }
    });


});
