var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
mongoose.Promise = global.Promise;

const app = express();
const port = 3000;
const databaseURL = "mongodb://localhost:27017/splitwise";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', routes);

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => { }).then(() => {
    console.log('Successfully connected to DB.');
}).catch(err => {
    console.log('Error connecting db - ', err);
    process.exit(1);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

