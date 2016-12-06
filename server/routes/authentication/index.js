const config = require('dos-config').auth;
const request = require('request');
const express = require('express');
const router = express.Router();
const qs =  require('qs');

const claimMapper = require('./claim-mapper.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`https://${config.domain}/authorize` + '?' + qs.stringify({
    'response_type': 'code',
    'connection': 'facebook',
    'state': req.query.return_url,
    'client_id': config.clientId,
    'redirect_uri': 'http://localhost:5000/authenticate/callback'
  }));
});

router.get('/callback', function getSingleSignOnUser(req, res, next) {
  const query = req.query;
  const uri = 'http://localhost:5000/authenticate/callback';  
  const code = query.code;
  
  getSingleSignToken(code, uri, (err, resp, body) => {
    const rstr = JSON.parse(body);
    
    getUserProfile(rstr.access_token, (err, resp, body) => {
      if (err) return next(err);
      
      const state = new Buffer(JSON.stringify(claimMapper(JSON.parse(body)))).toString('base64');
      res.redirect(`${req.query.state}?login=${state}`);
    });
  });
});

/**
 * Retrieves the Single Sign On Token from Auth0
 *
 * @param  {string} code        OAuth Authorization Code
 * @param  {string} redirectUri redirect_uri OAuth Paramter
 * @param  {Function} callback  Callback
 */
function getSingleSignToken(code, redirectUri, callback) {
  request.post({
    url: `https://${config.domain}/oauth/token`,
    form: {
      'code': code,
      'grant_type': 'authorization_code',
      'client_secret': config.clientSecret,
      'client_id': config.clientId,
      'redirect_uri': redirectUri
    }
  }, callback);
}

/**
 * Retrieves the User Profile from Auth0
 *
 * @param  {String} accessToken OAuth access token
 * @param  {Function} callback  Callback
 */
function getUserProfile(accessToken, callback) {
  const url =
    `https://${config.domain}/userinfo?access_token=${accessToken}`;

  request.get({ url }, callback);
}

module.exports = router;
