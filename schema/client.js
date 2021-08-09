var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    id: String,
	clientId: String,
	clientSecret: String,
	grants: [String],
	redirectUris: [String]
});

var client = mongoose.model('client', clientSchema);
module.exports = client;