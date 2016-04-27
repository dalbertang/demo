/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'employees section', function() {
  var EmployeesCtrl, employeeService, $scope;


  beforeEach( module( 'ngBoilerplate' ) );

  function getEmployees(cb){
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
    cb(employees);
  }

  var esMock = {
    getEmployees: getEmployees
  };


  beforeEach( inject( function( $controller, _EmployeeService_, $rootScope) {
    var EmployeeService = _EmployeeService_;
    $scope = $rootScope.$new();
    EmployeesCtrl = $controller( 'EmployeesCtrl', { EmployeeService: esMock, $scope: $scope });
  }));

  it( 'should pass a dummy test', inject( function() {
    expect( EmployeesCtrl ).toBeTruthy();
  }));


  it( 'should get Employees', inject(function() {
    expect($scope.employees.length).toBe(12);
    $scope.removeEmployee({id:3});
    expect($scope.employees.length).toBe(11);
  }));
});

