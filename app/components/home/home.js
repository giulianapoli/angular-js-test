'use strict';

angular
  .module('myApp.home', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'components/home/home.html',
        controller: 'homeCtrl',
      });
    },
  ])

  .controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.userPosition = $location.path()
    $scope.$emit('eventHome', $scope.userPosition)
  }]);