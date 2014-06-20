var mongo = require('mongodb'),
    q = require('q'),
    mongoClient = mongo.MongoClient,
    BSON = mongo.BSONPure,
    devDb = 'mongodb://localhost/kcdc';

exports.List = function(){

    //promise creation
    var deferred = q.defer();

    //function is callback and will call back either error or db
    mongoClient.connect(devDb, function(err, db){
        if(err) {
            console.log(err);
            return deferred.reject(err);
        }
        db.collection('speakers').find().toArray(function(err, speakers){
            if(err) {
                console.log(err);
                return deferred.reject();
            }
            return deferred.resolve(speakers);
        });
    });
    return deferred.promise;
};

exports.GetById = function(id) {

    //promise creation
    var deferred = q.defer();
    mongoClient.connect(devDb, function (err, db) {
        if (err) {
            console.log(err);
            return deferred.reject(err);
        }
        var o_id = new BSON.ObjectID(id);
        db.collection('speakers').findOne({'_id':o_id}, function(err, speakers){
            if (err) {
                console.log(err);
                return deferred.reject();
            }
            return deferred.resolve(speakers);
        })
            .fail(function(data){
                console.log(data);
                res.send(500, 'Something went wrong')
            },
        update= function(req,res){
            var speaker = new Speaker();
            speaker.firstName="jim";
            speaker.save();
        });

    });
    return deferred.promise;
};