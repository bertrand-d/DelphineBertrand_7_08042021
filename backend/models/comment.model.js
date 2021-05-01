const commentSchema = function(post) {
    this.id = post.id;
    this.auteur = post.auteur;
    this.postId = post.postId;
    this.date = post.date;
    this.contenu = post.contenu;
};

module.exports = commentSchema;