app.directive('header', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/header/header.html',
    replace: true,
    scope: {
      peopleObj: '='
    }
  }
})
