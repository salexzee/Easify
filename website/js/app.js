var easifyApp = angular.module('easifyApp', ['ngRoute']);

easifyApp.config(function($routeProvider) {
    
 $routeProvider
 
 .when('/', {
     templateUrl: 'pages/main.html',
     controller: 'mainController'
 });

});

easifyApp.controller('mainController' ,['$scope', function ($scope) {

}]);