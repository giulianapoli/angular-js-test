'use strict';
var app = angular.module('myApp', ['ngRoute', 'myApp.home', 'myApp.details', 'myApp.version'])

// Declare app level module which depends on views, and core components
app.config([
  '$locationProvider',
  '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({ redirectTo: '/details' });
  },
]);

app.controller('myCtrl', function($http, $scope) {
  $http.get("data/data.json")
    .then((res) => {
      $scope.response1 = res.data;
    }, function(error){
    console.log(error);
  })

  $http.get('https://reqres.in/api/users')
  .then(res=>{
    $scope.response2 = res.data.data;
  }, function(error){
    console.log(error)
  })

});
