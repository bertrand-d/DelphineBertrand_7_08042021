const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
// const bcrypt = require('bcrypt');
// const { createHmac } = require('crypto');
// const secret = 'jaimelesponeysetinternetaussi';

//connect to DB
const sql = require("../models/db.js");
//user model
const User = require("../models/user.model.js");


exports.signin = (req, res) => {
    // Create User since model
    let newUser = new User(req.body);
    // Insert user in DB
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
    const userEmail = req.body.email;
    const userPassword = req.body.password;
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
        const userId = results[0].id;
        const role = results[0].role;
        return res.status(200).json({
            message: 'utilisateur connecté',
            userId: userId,
            role : role,
            token: jwt.sign(
                { userId: userId, role: role },
                'TmURuMzDYt10Vp8aealH',
                { expiresIn: '24h' }
            )
        });
    });
}

//get user profile
exports.profile = (req, res,) => {
    const userId = req.params.id;
    sql.query('SELECT id, nom, prenom, ville, avatar_url, role, TIMESTAMPDIFF(YEAR, date_naissance, CURDATE()) AS age FROM user WHERE id=?', userId, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        } else if (results.length === 0) {
            return res.status(401).json({ message: 'utilisateur inexistant' });
        } else {
            return res.status(200).json({ user: results[0] });
        }
    });
}

//edit profile
exports.editProfile = (req, res, next) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const date_naissance = req.body.date_naissance;
    const ville = req.body.ville;
    const id = req.params.id;
    sql.query('UPDATE user SET nom=?, prenom=?, ville=?, date_naissance=? WHERE id=?', [nom, prenom, ville, date_naissance, id], function (error, results, fields) {
        if (error) {
            console.log(req.body);
            return res.status(500).json({ error });
        } else if (results.length === 0) {
            return res.status(401).json({ message: 'utilisateur inexistant' });
        } else {
            return res.status(200).json({ user: results[0], message: 'utilisateur modifié' });
        }
    });
};

//delete profile
exports.deleteProfile = (req, res, next) => {
    const userId = req.params.id;
    sql.query('DELETE FROM user WHERE id=?', userId, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        } else if (results.length === 0) {
            return res.status(401).json({ message: 'utilisateur inexistant' });
        } else {
            return res.status(200).json({ user: results[0], message: 'utilisateur supprimé' });
        }
    });
};