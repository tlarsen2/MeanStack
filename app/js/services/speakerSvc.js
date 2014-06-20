app.factory('SpeakerSvc', ['$resource', function($resource){
    return $resource('/api/speakers');
}]);



/*app.factory('SpeakerSvc', ['$http', function($http){

    var list = function(){
        var result = $http.get('/api/speakers');

        return result;
    };

    return {
        List: list
    };
}]);*/

