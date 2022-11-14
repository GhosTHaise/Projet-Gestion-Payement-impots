const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !',e));

const Schema_habilitation = mongoose.Schema({
    address : {type : String,required : true},
    ville : {type : String,required : true},
    commune : {type : String , required : true},
    code_postal : {type : Number , required : true}
});

const Schema_user = mongoose.Schema({
    firstname : {type : String,required : true},
    lastname : {type : String,required : true},
    email : {type : String,required : true},
    tel : {type : String,required : true,minLength : 13},
    profil : {type : String,required : true},
    password : {type : String,required : true},
    status : {type : String , default : "client/normal"},
    habilitations : [Schema_habilitation],
});

const Schema_impots = mongoose.Schema({
    id_proprio  : { type  : String, required : true},
    Somme : { type : Number, required : true},
    date_payement : {type : String, required : true},
    facture : { type : String, requied : true}
});

module.exports = {
    login : mongoose.model('login',Schema_user),
    impots  : mongoose.model("impots",Schema_impots),
    habilitations : mongoose.model("habilitations",Schema_habilitation)
}