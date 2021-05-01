const commentSchema = function(post) {
    this.id = post.id;
    this.auteur = post.auteur;
    this.post = post.post;
    this.date = post.date;
    this.contenu = post.contenu;
};

module.exports = commentSchema;