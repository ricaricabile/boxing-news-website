
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
if(process.env.NODE_ENV != 'production') require('dotenv').config();
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port '+ port);
});
app.get('/fetchnewsorgdata', async (req, res) => {
    const result = await axios.get(`https://newsapi.org/v2/everything?q=boxing&apiKey=${process.env.NEWS_API_ORG_KEY}`);
    res.status(200).send(result.data);
});

