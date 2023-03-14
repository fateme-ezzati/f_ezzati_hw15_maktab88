const { join } = require('node:path');
const express = require('express');
const app = express();
const viewRoute = require("./routes/view-route");
const apiRoute = require("./routes/api-route");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/api', apiRoute);
app.use('/', viewRoute);


// not found
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'fail',
		message: `can't find ${req.originalUrl}`
	});
});

app.use((err, req, res, next) => {
	const { statusCode, status, message } = err;

	res.status(statusCode).json({ status, message });
});



app.listen(3000, () => console.log('Listening on :3000 ...'));