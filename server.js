const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// import routes
const feedbackRoutes = require('./routes/feedback');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


// routes
app.get('/', (req, res) => {
	res.send(`You have pinged the right server.`);
});

app.get('/api', (req, res) => {
	res.send(`API endpoint.`);
});

app.use('/api/feedback', feedbackRoutes);

app.listen(process.env.PORT, ()=> {console.log('Server started.', process.env.PORT);})