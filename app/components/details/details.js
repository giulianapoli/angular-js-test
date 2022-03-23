'use strict';

angular
  .module('myApp.details', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/details', {
        templateUrl: 'components/details/details.html',
        controller: 'View2Ctrl',
      });
    },
  ])

  .controller('View2Ctrl', [function () {}]);
