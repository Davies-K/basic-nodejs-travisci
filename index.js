const express = require('express');

const app = express();


// send get request 
app.get('/', (req, res) => {
    res.send('ci with travis')
})

// Port the express app will run on
const server = app.listen(3000, () => {
    console.log('running on port 3000')
})
module.exports = server;