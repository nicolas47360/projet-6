const validation = require('../models/user_validation');

exports.userInput = (req, res, next) => {
    const { error, value} = validation.validate(req.body);
    if(error) {
        res.status(422).json({error: "email ou mot de passe invalide"});
    }
    else{
        next();
    }
};
