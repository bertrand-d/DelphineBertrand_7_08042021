// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const { createHmac } = require('crypto');
// const secret = 'jaimelesponeysetinternetaussi';

//connexion à la DB
const sql = require("../models/db.js");
//modèle utilisateur
const User = require("../models/user.model.js");

exports.signin = (req, res) => {
    //TODO valider req.body
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

//login ci dessous
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
        return res.status(200).json({
            message: 'utilisateur connecté',
            user: results[0]
        });
    });
}