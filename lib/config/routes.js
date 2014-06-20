var homeCtrl = require('../controllers/home.js');

module.exports = function(router) {

    router.route('/')
        .get(homeCtrl.main)
        .post(function(req,res){
            res.send('You posted to the route');
        });
    router.route('/newpage')
        .get(homeCtrl.newpage)
        .post(function(req,res){
            res.send('You posted to the route');
        });
}