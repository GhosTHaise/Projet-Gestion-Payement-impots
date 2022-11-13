const express = require("express")
const Router = express.Router();

const {loginController} = require("../controller");
const InitWebRoute = (app) => {
    //https
    app.use((req,res,next)=>{
        //console.log("Request is secure ? :"+req.secure)
        if(!req.secure){
            //Decomment this if you only want to connect with secure url
            //return res.redirect("https://"+req.headers.host+req.url)
            console.log("Vous n'etes pas sur une connexion securise !");
        }
        next();
    });

    //Home Route
        //Login&Registered
        Router.get("/api/login/:id",loginController.userInfo);
        Router.post("/api/login",loginController.userRegistered);
        Router.post("/api/loginValidation",loginController.userLoginValidation);
    //Home Route END

    app.use(Router);


    //Middlezare en cas d'erreur , maintenir en bas des routes principaux
    app.use((req,res)=>{
        res.send({
            error : "Your request is not valid !"
        })
    });
}

module.exports = InitWebRoute;