const Rx = require('rxjs');
const RxOp = require('rxjs/operators');

const interval$ = Rx.interval(1000);
console.log(interval$);

angular.module('myApp', ['rx'])
  .controller('controller2', function($scope, observeOnScope) {
    console.log('observable', observeOnScope)
  });
