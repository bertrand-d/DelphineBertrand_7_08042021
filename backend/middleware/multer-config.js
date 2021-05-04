const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png' : 'png',
    'video/mp4' : 'mp4',
    'video/mkv' : 'mkv'
};

const storage = multer.diskStorage({ //où enregistrer les fichiers entrants
    destination: (req, file, callback) => {
        callback(null, 'images'); //enregistre dans le dossier images
    },
    filename: (req, file, callback) => { 
        const name = file.originalname.split(' ').join('_'); //utilise le nom d'origine, remplace les espaces vides par des _
        const extension = '.' + MIME_TYPES[file.mimetype]; //constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée
        const properName = name.split(extension)[0];
        callback(null, properName + Date.now() + extension); //ajoute un timestamp comme nom de fichier
    }
});

module.exports = multer({storage: storage}).single('media'); //exporte l'élément multer et passe la constante storage