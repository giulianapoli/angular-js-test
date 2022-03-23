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
  $scope.title = 'HELLO WORLD';
  const todoList = this;
  todoList.todos = [
    { text: 'learn AngularJS', done: true },
    { text: 'build an AngularJS app', done: false },
  ];

  todoList.addTodo = () => {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = '';
  };

  todoList.remaining = () => {
    let count = 0;
    angular.forEach(todoList.todos, (todo) => {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = () => {
    console.log(todoList);
    const oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, (todo) => {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
}
