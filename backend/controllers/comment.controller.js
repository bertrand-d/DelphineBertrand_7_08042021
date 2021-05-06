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

    sql.query('SELECT commentaire.*, user.nom, user.prenom FROM commentaire INNER JOIN user ON commentaire.auteur = user.id  WHERE post=? ORDER BY commentaire.id DESC ', postId, function (error, results, fields) {
        if (error) {
            console.error(error);
            return res.status(500).json({ error });
        } else {
            return res.status(200).json({ comments: results });
        }
    });
}

//delete comment
exports.deleteComment = (req, res, next) => {
    const commentId = req.params.id;
    const userId = req.currentUserId;
    
    let q = 'DELETE FROM commentaire WHERE commentaire.id=? AND auteur=?';
    let p = [commentId, userId];
    if (req.admin) {
        q = 'DELETE FROM commentaire WHERE commentaire.id=?';
        p = [commentId, postId];

    }
    sql.query(q, p, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        console.log(commentId);
        console.log(userId);
        return res.status(200).json({ message: 'commentaire supprimé' });
    });
};
