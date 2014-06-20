var speakersCtrl = require('../controllers/speaker');

module.exports = function(router) {

    router.route('/speakers')
        .get(speakersCtrl.List);

    router.route('/speakers/:id')
        .get(speakersCtrl.GetById);
}
