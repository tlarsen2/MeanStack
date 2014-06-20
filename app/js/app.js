var app = angular.module('KCDC', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).when('/new', {
                templateUrl: 'partials/new.html',
                controller: 'NewCtrl'
            }).when('/mypage', {
                templateUrl: 'partials/mypage.html'
            }).otherwise({
                redirectTo: '/'
            });
        //For use with html 5 to remove the hashes has a graceful fall back if browser is not compatible with it
        $locationProvider.html5Mode(true);
    });

