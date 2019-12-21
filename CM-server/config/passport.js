var passport = require("passport");

// We are using passport local signin/signup strategies for our app
module.exports = function (passport, auth) {
    var Auth = auth;
    
    var LocalStrategy = require('passport-local').Strategy;

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
           
        {

            // by default, local strategy uses username and password, we will overrIDe with ID

            usernameField: 'ID',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, ID, password, done) {

            var Auth = auth;

            var isValidPassword = function (userpass, password) {
                if (userpass === password) return true
                else return false;

            }
            console.log("logged to", ID)
            Auth.findOne({
                where: {
                    ID: ID
                }
            }).then(function (user) {
                console.log(user)
                if (!user) {

                    return done(null, false, {
                        message: 'ID does not exist'
                    });

                }

                if (!isValidPassword(user.Password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));

    //serialize
    passport.serializeUser(function (auth, done) {

        done(null, auth.ID);

    });

    // deserialize user 
    passport.deserializeUser(function (ID, done) {

        Auth.findByPk(ID).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });


}