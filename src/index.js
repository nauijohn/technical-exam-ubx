const envConfig = require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const itemsRoute = require('./routes/items-route');
const categoriesRoute = require('./routes/categories-route');
const apiCategoriesRoute = require('./routes/api/api-categories-route');
const apiItemsRoute = require('./routes/api/api-items-route');

envConfig();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/', (req, res) => res.redirect('/categories'));
app.use('/categories', categoriesRoute);
app.use('/items', itemsRoute);

// APIs
app.use('/api/categories', apiCategoriesRoute);
app.use('/api/items', apiItemsRoute);

app.use((req, res) => {
  res.status(404).render('./404', {
    pageTitle: 'Page not found',
    path: '/notfound',
  });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
