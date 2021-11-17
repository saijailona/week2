'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { httpError } = require('../utils/errors');

const login = (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      console.log('login info', err, user, info);
      if(err || !user) {
          next(httpError('login error', 400));
          return;
      }
      req.login(user, {session: false}, (err) => {
        if (err) {
            next(httpError('Login error', 400));
            return;
        }
        delete user.password;
        const token = jwt.sign(user, 'oidjojwpd');
        return res.json({ user, token});
        });
    })(req,res,next);
};

module.exports = {
  login,
};