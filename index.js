var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer();

app.set('port', (process.env.PORT || 1337));


app.use(express.static(__dirname + '/'  ));

app.post('/upload', upload.single('file'),function (req, res) {
  res.send({size: req.file.size});
});

app.listen(app.get('port'), function() {
    console.log('App is running on ', app.get('port'));
});
