const express = require('express');
const app = express();
const tempRoutes = require("./routes/seccam.js")
const multer = require('multer');
var bodyParser = require('body-parser');

// init Middleware
app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({extended: false }));

// app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 9001;
app.use('/seccam', tempRoutes)
app.use(express.static('public'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));