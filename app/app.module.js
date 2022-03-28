'use strict';
var app = angular.module('myApp', ['ngRoute', 'myApp.home', 'myApp.details', 'myApp.version'])

// Declare app level module which depends on views, and core components
app.config([
  '$locationProvider',
  '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({ redirectTo: '/home' });
  },
]);

app.controller('myCtrl', ['$scope', 'httpService', function(scope, httpService) {
  httpService.getPeople().then(res=>scope.response1 = res)
  httpService.getPeopleResreq().then(res=>scope.response2 = res)
}]);
