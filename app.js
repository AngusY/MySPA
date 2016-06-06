var app = angular.module('mySPA', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/devices', {
    templateUrl : 'pages/devices.html',
    controller  : 'DevicesController'
  })

  .when('/accounts', {
    templateUrl : 'pages/accounts.html',
    controller  : 'AccountsController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello World!  This is my first SPA.';
});

app.controller('DevicesController', function($scope) {
  $scope.message = 'List of Devices';
});

app.controller('AccountsController', function($scope) {
  $scope.message = 'List of Accounts';
});
