const express = require('express');
const app = express();
const port =3000;

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('static'));

const home = require('./routes/home');
app.use('/', home);


app.listen(3000, () => {
  console.log("server started at port",port);
});
app.listen(port,"192.168.29.158")
