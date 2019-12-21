var passport = require("../config/passport.js");
var path = require("path");
module.exports = function (app, passport) {
    // 

   app.get("/",function(req,res){
       res.render("signin_signup")
   })
    //logout
    app.get("/logout", function (req, res) {
        console.log("Log Out Route Hit");
        req.session.destroy(function (err) {
            if (err) console.log(err)
                res.redirect('/');
        });
    });
        
    app.post("/signin/user",passport.authenticate('local-signin'),function(req,res) {
        
         console.log(req.user);
         //success, redirect dashboard
         console.log("success");
         res.send("success");
    });
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');

    }
}