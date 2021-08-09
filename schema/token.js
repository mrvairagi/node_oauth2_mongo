var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
    accessToken: String,
	accessTokenExpiresAt: Date,
	refreshToken: String,
	refreshTokenExpiresAt: Date,
	client: Object,
	user: Object
});

var token = mongoose.model('token', tokenSchema);
module.exports = token;