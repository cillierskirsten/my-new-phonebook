const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
});

app.listen(process.env.PORT, function(error) {
    if (error){
        console.log('Could not start!');
        console.error(error.message);

        return;
    }

    console.log('server started on port ' + process.env.PORT);
});