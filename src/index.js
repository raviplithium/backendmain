const express = require('express'); 
var bodyParser = require('body-parser');

const route = require('./routes/route.js'); //import route content (address)

const app = express();

app.use(bodyParser.json());   //converting machinery readable data to j.son format
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);             // channelise request towards route

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
