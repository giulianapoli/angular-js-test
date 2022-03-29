'use strict';

angular
  .module('myApp.details', ['ngRoute'])
  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/details', {
        templateUrl: 'components/details/details.html',
        controller: 'detailsCtrl',
      });
    },
  ])

  .controller('detailsCtrl', Test);
function Test($scope, $location) {
  const data = this;
  $scope.userPosition = $location.path()
  $scope.$emit('eventDetails', $scope.userPosition)

  $scope.title = 'HELLO WORLD';

  data.people = $scope.response1;
  data.peopleReqres = $scope.response2;
  console.log(data.peopleReqres)

  data.todos = [
    { text: 'learn AngularJS', done: true },
    { text: 'build an AngularJS app', done: false },
  ];

  data.addTodo = () => {
    data.todos.push({ text: data.todoText, done: false });
    data.todoText = '';
  };

  data.remaining = () => {
    let count = 0;
    angular.forEach(data.todos, (todo) => {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  data.archive = () => {
    const oldTodos = data.todos;
    data.todos = [];
    angular.forEach(oldTodos, (todo) => {
      if (!todo.done) data.todos.push(todo);
    });
  };
}
