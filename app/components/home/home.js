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

  .controller('homeCtrl', Test);
function Test($scope) {
  const data = this;

  $scope.title = 'HELLO WORLD';


  data.people = $scope.response;

  data.todos = [
    { text: 'learn AngularJS', done: true },
    { text: 'build an AngularJS app', done: false },
  ];

  data.addTodo = () => {
    data.todos.push({ text: todoList.todoText, done: false });
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
    console.log(data);
    const oldTodos = data.todos;
    data.todos = [];
    angular.forEach(oldTodos, (todo) => {
      if (!todo.done) data.todos.push(todo);
    });
  };
}
