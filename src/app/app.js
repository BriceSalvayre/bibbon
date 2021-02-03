const express = require('express');
const mySql = require('mysql2');
const cors = require('cors');

const mealRoute = require('./pages/meal/meal.page');
const subscriptionRoute = require('./pages/subscription/subscription.page');
const app = express();

app.use('/subscription',subscriptionRoute);
app.use('/meal',mealRoute);
app.use(cors());

app.listen(3000, () => {
    console.log('app started');
});