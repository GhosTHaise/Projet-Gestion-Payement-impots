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

const Schema_impots = mongoose.Schema({
    Somme : { type : Number, required : true},
    date_payement : {type : String, required : true},
    facture : { type : String, required : true}
});

const Schema_user = mongoose.Schema({
    firstname : {type : String,required : true},
    lastname : {type : String,required : true},
    email : {type : String,required : true},
    address : {type : String , required : true},
    telephone : {type : String,required : true,minLength : 8},
    country : {type : String,default : "Madagascar"},
    city: {type : String,default : "Antananarivo"},
    zipCode : {type : String,requied : true},
    profil : {type : String,default : "default.png"},
    password : {type : String,required : true},
    status : {type : String , default : "client/normal"},
    habilitations : [Schema_habilitation],
    impots : [Schema_impots]
});



module.exports = {
    login : mongoose.model('login',Schema_user),
    impots  : mongoose.model("impots",Schema_impots),
    habilitations : mongoose.model("habilitations",Schema_habilitation)
}