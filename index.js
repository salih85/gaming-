const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('static'));

const home = require('./routes/home');
app.use('/', home);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});