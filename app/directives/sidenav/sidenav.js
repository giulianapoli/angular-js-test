app.directive('sidenav', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/sidenav/sidenav.html',
    replace: true,
    scope: {
      userPosition: '='
    }
  }
})
