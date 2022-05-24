const mongoose = require('mongoose');

const modelsauce = mongoose.Schema({
    userId : {type: String, required:true},
    name : {type: String, required:true},
    manufactured : {type: String, required:true},
    descritpion : {type: String, required:true},
    mainPepper : {type: String, required:true},
    imageUrl : {type: String, required:true},
    heat : {type: Number, required:true},
    likes : {type: Number, required:true},
    dislikes : {type: String, required:true},
    usersLiked : {type: String, required:true},
    usersDisliked : {type: String, required:true},
});

module.exports = mongoose.model('sauce', modelsauce)