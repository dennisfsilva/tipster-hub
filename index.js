require('dotenv').config();
const port = process.env.PORT || 8000; 

const express = require('express');
const app = express();

// use json expressions
app.use(express.json())

// API services request functionalities (GET/POST/PUT/DELETE/UPDATE ...) 
app.get('/home', function (req, res) {
      	data = {
	"test0":{
		"name": "botclimber",
		"music": "trap",
		"interests": "makeup"
		}
	}
	console.log( "request to /home");
      	res.end(JSON.stringify());
   });
})

app.listen(port, () => {
	console.log('Server started on port ' + port)
});
