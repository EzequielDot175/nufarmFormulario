/**
* Nufarm Module
*
* Description
*/
var app = angular.module('Nufarm', ['angularFileUpload','ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'views/one.html',
        controller: 'ctrlAppInicio'
      }).

      when('/two', {
        templateUrl: 'views/two.html',
        controller: 'ctrlAppTwo'
      }).

      when('/three', {
        templateUrl: 'views/three.html',
        controller: 'ctrlAppThree'
      }).

       when('/fourth', {
        templateUrl: 'views/fourth.html',
        controller: 'ctrlAppFourth'
      }).

      otherwise({
        redirectTo: '/'
      });
 }]);

