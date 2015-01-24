var passport = require('passport');

module.exports = {
 
  login: function (req, res) {
    res.view();
  },
  process: function(req, res){
    passport.authenticate('github', { failureRedirect: '/login' },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(req, res);
  },
  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  }
};