// const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
//connect to DB
const sql = require("../models/db.js");
//comment model
const Comment = require("../models/comment.model.js");

//post
exports.createComment = (req, res) => {
    // Create comment since model
    let newComment = new Comment(req.body);
    // Insert comment in DB
    sql.query('INSERT INTO commentaire SET ?', newComment, function (error, results, fields) {
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

//get all comment
exports.allComments = (req, res,) => {
    const postId = req.params.postId;

    sql.query('SELECT * FROM commentaire WHERE post=? ', postId, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({ comments: results });
        }
    });
}
