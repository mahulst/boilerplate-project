'use strict';

require('angular/angular');  
require('angular-route/angular-route');  
var controllers = require('./controllers');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',  
  function($routeProvider, $httpProvider) {
    $routeProvider.when('/view1', {
      templateUrl: './partials/partial1.html', 
      controller: 'MyCtrl1'
    }).when('/view2', { 
      templateUrl: './partials/partial2.html', 
      controller: 'MyCtrl2'
    }).otherwise({redirectTo: '/view1'});
  }
]); 

app.controller('MyCtrl1', ['$scope', controllers.MyCtrl1]);  
app.controller('MyCtrl2', ['$scope', controllers.MyCtrl2]); 
