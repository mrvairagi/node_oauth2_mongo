var express = require('express');
var OAuth2Server = require('oauth2-server')
var router = express.Router();

var Request = OAuth2Server.Request,
	Response = OAuth2Server.Response;

var oauth = new OAuth2Server({
	model: require('../model'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});

function obtainToken(req, res) {

	var request = new Request(req);
	var response = new Response(res);

	return oauth.token(request, response)
		.then(function(token) {

			res.json(token);
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

function authenticateRequest(req, res, next) {

	var request = new Request(req);
	var response = new Response(res);

	return oauth.authenticate(request, response)
		.then(function(token) {

			next();
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/oauth/token',  obtainToken);



module.exports = router;
