const express  = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);  

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});