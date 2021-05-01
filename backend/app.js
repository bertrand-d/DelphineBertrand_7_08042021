const express = require('express');
const app = express();
const mysql = require('mysql');
//routeurs
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');
const commentRoutes = require('./routes/comment.route');

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accède à l'api depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajoute les headers aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //envoie les requêtes avec les méthodes mentionnées
    next();
});

//body parser
app.use(express.json());

//routes
app.use('/api/auth', userRoutes);
app.use('/api/feed', postRoutes, commentRoutes);

module.exports = app;