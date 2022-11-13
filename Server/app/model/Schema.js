const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !',e));

const Schema_user = mongoose.Schema({
    firstname : {type : String,required : true},
    lastname : {type : String,required : true},
    email : {type : String,required : true},
    tel : {type : String,required : true,minLength : 13},
    profil : {type : String,required : true},
    password : {type : String,required : true}
})

module.exports = {
    login : mongoose.model('login',Schema_user)
}