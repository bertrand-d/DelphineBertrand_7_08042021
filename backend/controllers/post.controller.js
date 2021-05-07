const { createPool } = require('mysql');
//connect to DB
const sql = require("../models/db.js");
//post model
const Post = require("../models/post.model.js");
//fs's node
const fs = require('fs');

//post
exports.createPost = (req, res) => {

    // Create Post since model
    let postData = req.body;
    postData.media_url = req.file ? req.file.filename : null;

    let newPost = new Post(postData);
    // Insert post in DB
    sql.query('INSERT INTO post SET ?', newPost, function (error, results, fields) {
        if (error) {
            console.log(error)
            return res.status(500).json({ error });
        }
        // DB ok
        const id = results.insertId;
        newPost.id = id;
        return res.status(200).json({
            message: 'post créé',
            post: newPost
        });
    });
};

//get all posts
exports.allPosts = (req, res,) => {
    sql.query('SELECT post.id, post.contenu, post.media_url, DATE_FORMAT(post.date, "%d/%m/%Y") date, auteur, user.nom, user.prenom FROM post INNER JOIN user ON post.auteur = user.id ORDER BY post.id DESC', function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        return res.status(200).json({ post: results });
    });
}

//delete post
exports.deletePost = (req, res, next) => {
    const postId = req.params.id;
    const userId = req.currentUserId;

    let q = 'DELETE FROM post WHERE id=? AND auteur=?';
    let p = [postId, userId];
    if (req.admin) {
        q = 'DELETE FROM post WHERE id=?';
        p = [postId];

    }
    if(req.body.media_url) {
        fs.unlinkSync(`images/${req.body.media_url}`);
    }
    sql.query(q, p, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        return res.status(200).json({ message: 'post supprimé' });
    });
};