require('dotenv').config();
const port = process.env.PORT || 8000; 

const express = require('express');
const app = express();

// use json expressions
app.use(express.json())

// API services request functionalities (GET/POST/PUT/DELETE/UPDATE ...) 
app.get('/home', function (req, res) {
	console.log( "request to /home");
	res.status(200).json("stop trying be god")
   });


app.listen(port, () => {
	console.log('Server started on port ' + port)
});
