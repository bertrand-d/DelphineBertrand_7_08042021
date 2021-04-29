const postSchema = function(post) {
    this.id = post.id;
    this.date = post.date;
    this.contenu = post.contenu;
    this.media_url= post.media_url;
    this.auteur = post.auteur;
};

module.exports = postSchema;