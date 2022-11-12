const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !',e));

const Schema_user = mongoose.Schema({
    username : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required : true}
})

module.exports = {
    article : mongoose.model('article', Schema_article),
    login : mongoose.model('login',Schema_user)
}