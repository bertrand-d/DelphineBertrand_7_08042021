
const userSchema = function(user) {
    this.id = user.id;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.ville = user.ville;
    this.email = user.email;
    this.password = user.password;
    this.date_naissance = user.date_naissance;
    this.avatar_url = user.avatar_url;
};

module.exports = userSchema;