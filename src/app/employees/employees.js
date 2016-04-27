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
        $scope.employees = data;
      }
    });

    $scope.removeEmployee = function(employee){
      //console.log('employee : ', employee);
      for(var i=0; i < $scope.employees.length; i++){
        if (employee.id === $scope.employees[i].id){
          $scope.employees.splice(i,1);
          //console.log('removing: ', i);
          break;
        }
      }

    };

});
