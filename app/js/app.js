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
    })
    .filter('filterAll', function(){
        return function(list, search) {
            if(!search) return list;

            var searchTerm = search.toLowerCase();

            return list.filter(function(item) {
                return item.firstName.toLowerCase().indexOf(searchTerm) > -1 ||
                                                item.lastName.toLowerCase().indexOf(searchTerm) > -1
                                                || item.email.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
    })
//    .run(function(){})
    .directive('speaker', function(){
        return {
          restrict: 'E',
          transclude: true,
          scope: {
              firstName: '@',
              lastName: '@',
              email:'@',
              edit: '&onEdit'
          },
          templateUrl: '/partials/speaker.html'
          /*controller: function($scope) {
              $scope.speaker = speaker;
          },*/
//          link: function(scope, element, attrs){
//            scope.speaker = attrs.speaker;
//          }
        };
    });

