const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
// const bcrypt = require('bcrypt');
// const { createHmac } = require('crypto');
// const secret = 'jaimelesponeysetinternetaussi';

//connexion à la DB
const sql = require("../models/db.js");
//modèle utilisateur
const User = require("../models/user.model.js");


exports.signin = (req, res) => {
    // Create User depuis le model
    let newUser = new User(req.body);
    // Inserer le user dans la DB
    sql.query('INSERT INTO user SET ?', newUser, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        // DB ok
        const id = results.insertId;
        newUser.id = id;
        return res.status(200).json({
            message: 'utilisateur créé',
            user: newUser
        });
    });
};

//login
exports.login = (req, res,) => {
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    sql.query('SELECT * FROM user WHERE email=? AND password=?', [userEmail, userPassword], function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        if (results.length === 0) {
            return res.status(401).json({
                error: true,
                message: 'Le nom d\'utilisateur ou le mdp est invalide'
            })
        }
        let userId = results[0].id;
        return res.status(200).json({
            message: 'utilisateur connecté',
            userId: userId,
            token: jwt.sign(
                {userId: userId},
                'TmURuMzDYt10Vp8aealH',
                {expiresIn: '24h'}
            )
        });
    });
}

//chargement du profil utilisateur
exports.profile = (req, res,) => {
    const userId = req.params.id;
    sql.query('SELECT id, nom, prenom, ville, TIMESTAMPDIFF(YEAR, date_naissance, CURDATE()) AS age FROM user WHERE id=?', userId, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        } else if (results.length === 0) {
            return res.status(401).json({message: 'utilisateur inexistant'});
        } else {
            return res.status(200).json({user: results[0]});
        }
    });
}