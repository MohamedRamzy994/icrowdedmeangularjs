'use strict';
const myApp = angular.module('myApp',['ngRoute',
'myApp.version']);
// Declare app level module which depends on views, and core components
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  $locationProvider.hashPrefix('!');
  // $routeProvider.otherwise({redirectTo: '/'});
}]);
