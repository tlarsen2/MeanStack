app.controller('HomeCtrl', ['SpeakerSvc', function(speakerSvc){
    var self = this;
    self.speaker = {};
    self.speakers = speakerSvc.query();
//    self.speakers = speakerSvc.List().success(function(data){
//        self.speakers = data;
//    });
    self.editing = false;

    self.addSpeaker = function(){
        self.speakers.push(self.speaker);
        self.speaker = {};
    };
    self.editSpeaker = function(speaker){
        self.editing = true;
        self.speaker = speaker;
    };
    self.finishEdit = function(speaker){
        self.editing = false;
        self.speaker = {};
    };
}]);