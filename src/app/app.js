angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.employees',
  'ngBoilerplate.about',
  'ngBoilerplate.mockServices',
  'ngBoilerPlate.employeeService',
  'ngMockE2E',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope, $location) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      //save location.search so we can add it back after transition is done

      this.locationSearch = $location.search();
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      //restore all query string parameters back to $location.search
      $location.search(this.locationSearch);
    });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
});

