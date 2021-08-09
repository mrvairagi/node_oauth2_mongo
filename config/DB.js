//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/node_oauth2';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((connection)=>{
    console.log(`Connected to Mongo database "${connection.connections[0].name}"`)
}).catch((error) => {
    console.error('error connecting to mongo')
    console.error
 })

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));