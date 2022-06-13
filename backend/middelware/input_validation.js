const validation = require('../models/user_validation');

exports.userInput = (req, res, next) => {
    const { error, value} = validation.validate(req.body);
    if(error) {
        res.status(422).json({error: "email ou mot de passe invalide veuillez mettre 8 caractéres et une majuscule pour le mot de passe"});
    }
    else{
        next();
    }
};
