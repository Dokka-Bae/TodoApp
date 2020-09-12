// global variable: angular
var app = angular.module("app.todos", ["xeditable"]);

app.controller("todosController", ['$scope', 'svTodos', function($scope, svTodos) {
    $scope.appName = "To do dashboard";  
    $scope.formData = {};                                           // data input
    $scope.todos = [];

    $scope.loading = true;

    // load data from api
    svTodos.get().then(function(res) {                         // ham callback tra lai danh sach cac du lieu todo
        $scope.todos = res.data;   
        $scope.loading = false;                       // why res.data
    });

    $scope.createToDo = function(){
        $scope.loading = true; 
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        svTodos.create(todo).then(function(res) {
            $scope.todos = res.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });
    }
    $scope.updateTodo = function(todo){
        console.log("Update: ", todo);
        $scope.loading = true;
        
        svTodos.update(todo).then(function(res) {
              $scope.todos = res.data;
              $scope.loading = false;
        });
    }
    $scope.deleteTodo = function(todo){
        $scope.loading = true;

        svTodos.delete(todo._id).then(function(res) {
            $scope.todos = res.data;
              $scope.loading = false;
        });
    }
}]);