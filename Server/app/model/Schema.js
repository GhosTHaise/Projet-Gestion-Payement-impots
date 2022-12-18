const { response } = require('express');
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
    facture : { type : String, required : true},
    
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
    status : {type : String , default : "Client"},
    habilitations : [Schema_habilitation],
    impots : [Schema_impots]
});

//create default admin account
const login = mongoose.model('login',Schema_user)
mongoose.model('login',Schema_user).find({
    firstname : "Administrateur",
    lastname : "Supreme",
    email : "admin@gmail.com",
    status : "Admin"
}).then( async response =>{
    if(response.length == 0){
        await new login({
            firstname : "Administrateur",
            lastname : "Supreme",
            email : "admin@gmail.com",
            status : "Admin",
            password : "admin1234",
            address : "Anywhere",
            telephone : "+261 xx xx xxx xx",
            country : "Madagascar",
            city: "Antananarivo",
            zipCode : "xxx"
        }).save();
    }
})
module.exports = {
    login ,
    impots  : mongoose.model("impots",Schema_impots),
    habilitations : mongoose.model("habilitations",Schema_habilitation)
}