var mongoose = require('mongoose'),
    Speaker = require('../models/speaker'),
    speakerSvc = require('../services/speakers');

function speakerCtrl(){
    var list = function(req,res) {
            console.log(req.query);
            var query = {};
           /* if(req.query.lastName){
                query.lastName = req.query.lastName;
            }*/
            if(req.query.lastName){
                query.lastName = new RegExp('^'+req.query.lastName+'*/');
            }
            Speaker.find(query, function(err, speakers){
               if(err){
                   console.log(err);
                   res.send(500, 'you get nothing');
               }
               res.json(speakers);
            });
        },

        getById = function(req,res) {
           // var id = req.params.id;
            Speaker.findById(req.params.id, function(err, speaker){
                if(err) {
                    console.log(err);
                    res.send(500, 'you get nothing');
                }
                res.json(speaker);
            });

           /* Speaker.findOne({_id: id} ,function(err, speaker) {
                if(err) {
                    console.log(err);
                    res.send(500, 'you get nothing');
                }
                res.json(speaker);
            });*/
        };
    return{
        List: list,
        GetById: getById
    };
}

//using mongodb npm
/*function speakerCtrl(){
    var list = function(req,res) {
            speakerSvc.List()
                .then(function(data){
                    res.json(data);
                });
        },

        getById = function(req,res) {
            speakerSvc.GetById(req.params.id)
                .then(function (data) {
                    res.json(data);
                });
        };
    return{
        List: list,
        GetById: getById
    };
}*/

module.exports = speakerCtrl();