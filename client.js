var client = angular.module('routingApp', ['ngRoute']);

client.config(['$routeProvider', function($routeProvider) {
   $routeProvider
      .when('/', { templateUrl: 'home.html' })
      .when('/about', { templateUrl: 'about.html' })
      .when('/hoobies', { templateUrl: 'hoobies.html' })
      .otherwise({redirectTo: '/'});
}]);
