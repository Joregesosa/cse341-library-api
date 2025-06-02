const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const appConfig = require('./index');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GitHubStrategy(
    {
      ...appConfig.github,
      scope: ['user:email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Buscar usuario existente
        const user = await User.findOne({
          $or: [{ email: profile.emails[0].value }, { githubId: profile.id }],
        });

        if (user) {
          return done(null, user);
        }

        const [firstName, lastName] = profile?.displayName?.split(' ') ?? [
          '',
          '',
        ];

        const newUser = new User({
          firstName,
          lastName,
          email: profile.emails[0].value,
          githubId: profile.id,
        });

        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

module.exports = passport;
