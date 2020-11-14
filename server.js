const express = require('express');
const app = express();

port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/mflix'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/mflix/index.html');
});

app.listen(port, () => {
  console.log('App is running in port ' + port);
});