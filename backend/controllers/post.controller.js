// const jwt = require('jsonwebtoken');
const { createPool } = require('mysql');
//connect to DB
const sql = require("../models/db.js");
//user model
const Post = require("../models/post.model.js");

//post
exports.createPost = (req, res) => {
    // Create Post since model
    let newPost = new Post(req.body);
    // Insert user in DB
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
    sql.query('SELECT auteur, DATE_FORMAT(date, "%d/%m/%Y") date, contenu, media_url FROM post', function (error, results, fields) {
        if (error) {
            return res.status(500).json({ error });
        } else if (results.length === 0) {
            return res.status(401).json({ message: 'post inexistant' });
        } else {
            return res.status(200).json({ post: results});
        }
    });
}