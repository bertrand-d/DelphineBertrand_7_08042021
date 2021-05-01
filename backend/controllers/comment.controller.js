// const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
//connect to DB
const sql = require("../models/db.js");
//user model
const Comment = require("../models/comment.model.js");

//post
exports.createComment = (req, res) => {
    // Create Post since model
    let newComment = new Comment(req.body);
    // Insert user in DB
    sql.query('INSERT INTO post SET ?', newComment, function (error, results, fields) {
        if (error) {
            console.log(error)
            return res.status(500).json({ error });
        }
        // DB ok
        const id = results.insertId;
        newComment.id = id;
        return res.status(200).json({
            message: 'commentaire créé',
            post: newComment
        });
    });
};
