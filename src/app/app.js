const express = require('express');
const mySql = require('mysql2');
const cors = require('cors');

const mealRoute = require('./pages/meal/meal.page');
const subscriptionRoute = require('./pages/subscription/subscription.page');
const modalRoute = require('./pages/meal/modal/modal.page');
const loginRoute = require('./pages/login/login.page');
const { urlencoded } = require('body-parser');
const app = express();

app.use('/subscription/',subscriptionRoute);
app.use('/meal/',mealRoute);
app.use('/meal/modal',modalRoute);
app.use('/login',loginRoute);
//app.use(urlencoded({extended:true}));
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
    console.log('app started');
});