const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
    try {
        const token = req.headers.authorization.split(' ')[1]; //extrait le token de l'authorization de la requete entrante
        const decodedToken = jwt.verify(token, 'TmURuMzDYt10Vp8aealH'); //décode le token, si invalide, une erreur sera générée
        const userId = decodedToken.userId; //extrait l'id utilisateur du token
        
        if(userId) {
            // request sql to get role
            req.currentUserId = userId; //save userId into request object
            // req.admin = true;
            next(); //utilisateur authentifié
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request !')
        });
    }
};