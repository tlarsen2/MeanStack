
//revealing module pattern
function homeCtrl() {
    var main = function(req,res){
        res.render('index', {message: 'Kick-Ass'});
        };
    var newpage = function(req,res){
        res.render('thenewpage');
    };
    return {
        main: main,
        newpage: newpage
    };
}

module.exports = homeCtrl();



//module.exports = (function homeCtrl() {
//    var main = function(req,res){
//        res.render('index', {message: 'Kick-Ass'});
//    };
//    var newpage = function(req,res){
//        res.render('thenewpage');
//    };
//    return {
//        main: main,
//        newpage: newpage
//    };
//
//})();