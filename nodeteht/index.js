'use strict';
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'public/kuvat/'});

const app = express();


app.use(express.static('public'));

app.post('/upload', upload.single('kuva'), (req, res, next) => {
  res.send(req.file);

});


app.listen(3000);











/*
app.use((req, res, next) => {
  console.log('ok 0');
  next();
});
app.use(('/json',(req, res, next) => {
  console.log('ok 0');
  next();
}));

app.get('/', (req, res) => {
  console.log(req.ip);
  console.log(req.query.myParam);
  res.send('ok 1');
});
app.get('/path1/:param1', (req, res) => {
  console.log(req.params.param1);
  res.send('ok 2');

});
app.get(['/path2', '/path3', '/path4'], (req, res) => {
  console.log('req');
  res.send('ok 3');
});
app.get('/json', (req, res) => {
  const o = {
    id: 1,
    name: 'My response',
  };

  res.send(o);
});
*/