const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createHmac } = require('crypto');
const secret = 'jaimelesponeysetinternetaussi';

const sql = require("../models/db.js");
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