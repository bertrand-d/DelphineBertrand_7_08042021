const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
    try {
        const token = req.headers.authorization.split(' ')[1]; //extrait le token de l'authorization de la requete entrante
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); //décode le token, si invalide, une erreur sera générée
        const userId = decodedToken.userId; //extrait l'id utilisateur du token
        const role = decodedToken.role;
        if(userId) {
            req.currentUserId = userId; //save userId into request object
            req.admin = role == 1;
            next(); //utilisateur authentifié
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request !')
        });
    }
};