var easifyApp = angular.module('easifyApp', ['ngRoute']);

easifyApp.config(function($routeProvider) {

 $routeProvider
 
 .when('/', {
   templateUrl: 'pages/main.html',
   controller: 'mainController'
 })
 
 .when('/docs', {
   templateUrl: 'pages/docs.html',
   controller: 'docsController'
 })
 
 .when('/contribute', {
   templateUrl: 'pages/contribute.html',
   controller: 'contributeController'
 });

});

easifyApp.controller('mainController' ,['$scope', function ($scope) {

}]);

easifyApp.controller('docsController' ,['$scope', function ($scope) {

}]);

easifyApp.controller('contributeController' ,['$scope', function ($scope) {

}]);