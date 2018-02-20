const express = require('express'),
  path = require('path'),
  app = express(),
  port = 3000;

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'public/views'));

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: __dirname });
});
app.get('/lesson-:num', (request, response) => {
  response.sendFile('index.html', { root: __dirname + '/public/views/lesson-' + request.params.num });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('error: ', err);
  }

  console.log(`server is listening on ${port}`);
});
