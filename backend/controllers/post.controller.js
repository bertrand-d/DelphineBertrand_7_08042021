// const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
//connect to DB
const sql = require("../models/db.js");
//post model
const Post = require("../models/post.model.js");

//post
exports.createPost = (req, res) => {
    // Create Post since model
    let newPost = new Post(req.body);
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
    console.log("this.deletePost");
    const postId = req.params.id;
    const userId = req.currentUserId;


    let q = 'DELETE FROM post WHERE id=? AND auteur=?';
    let p = [postId, userId];
    if (req.admin) {
        q = 'DELETE FROM post WHERE id=?';
        p = [postId];

    }

    sql.query(q, p, function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        }
        return res.status(200).json({ message: 'post supprimé' });
    });
};