var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var speakerSchema = new Schema ({
   bio: {type:String},
   email:{type: String},
   firstName: {type: String},
   lastName: {type: String},
   location: {type: String},
   picUrl: {type: String},
   sessions: [{
       _id: {type: String},
       sessionName: {type: String}
   }],
   url: {type: String},
   hotelNights: {type: Array},
   shirtSize: {
       value: {type: String}
   },
   specialInstructions: {type: String}
});

module.exports = mongoose.model('Speaker', speakerSchema);