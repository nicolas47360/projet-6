const express = require('express');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauceroute');
const authRoutes = require('./routes/authroute');

const path = require('path');
const helmet = require('helmet');
require('dotenv').config;

const app = express();


mongoose.connect(process.env.MONOGO_DB_CONNEXION ,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;