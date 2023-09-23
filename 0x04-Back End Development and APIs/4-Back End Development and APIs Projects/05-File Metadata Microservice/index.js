var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// --------------CHALLENGE--------------
// Firstly install "multer". It is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// Analyze Uploaded file API endpoint
app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

const port = process.env.PORT || 3005;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
