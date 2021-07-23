const express = require('express');

const {submit} = require('../controllers/feedback');

const router = express.Router();

router.get('/', (req, res) => { res.send('Feedback module APIs.'); });
router.post('/submit', submit);

module.exports = router;