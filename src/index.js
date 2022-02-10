const express = require('express');
const app = express();
const path = require('path');
// settings
app.set('port',3000);
app.set('views')
app.set('views engine','ejs')
//midddlewares

//routes
app.get('/',(req, res) => {
     res.sendFile((__dirname,'views/index.html'));


    });
// statics files


//server
// Set Port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});
// listening the server
app.listen (3000,() =>{
    console.log('Server on port', app.get ('port'));
});
