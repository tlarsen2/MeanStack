app.controller('NewCtrl', ['$scope', function($scope){
    var self = this;

    self.speaker = {};
    self.speakers = [];

    self.addSpeaker = function(){
        self.speakers.push(self.speaker);
        self.speaker = {};
    };
}]);