const passport = require('passport');
const router = require('express').Router();
const FacebookStrategy = require('passport-facebook');
const { User } = require('../db/models');
module.exports = router;

if (!process.env.FACEBOOK_APP_ID || !process.env.FACEBOOK_APP_SECRET) {
  console.log(
    'Facebook client ID / secret not found. Skipping Facebook OAuth.'
  );
} else {
  const facebookConfig = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    profileFields: ['id', 'displayName', 'email']
  };

  const strategy = new FacebookStrategy(
    facebookConfig,
    (token, refreshToken, profile, done) => {
      const facebookId = profile.id;
      const name = profile.displayName;
      const email = profile.emails[0].value;

      User.find({ where: {facebookId} })
        .then(
          foundUser =>
            foundUser
              ? done(null, foundUser)
              : User.create({ name, email, facebookId }).then(createdUser =>
                  done(null, createdUser)
                )
        )
        .catch(done);
    }
  );

  passport.use(strategy);

  router.get('/', passport.authenticate('facebook', { scope: ['email'] }));



router.get('/callback', function(req, res, next) {
  passport.authenticate('facebook', function(err, user, info) {
    
    if (err) { return next(err); }
  
    req.logIn(user, function(err) {
      if (err) { return next(err); }

      if(user._options.isNewRecord){
        return res.redirect('/createProfile')
      }

      return res.redirect('/pets');
    });
  })(req, res, next);
})
}