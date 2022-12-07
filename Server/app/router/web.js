const express = require("express")
const Router = express.Router();

const {loginController,userController} = require("../controller");
const {loginRoutes,impotRoutes,userRoutes} = require("./routes");

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
        loginRoutes(Router);
    //Home Route END
    //User Route
        userRoutes(Router);
    //User Route END
    //Impot Route
        impotRoutes(Router);
    //Impot Route END
    
    app.use(Router);


    //Middleware en cas d'erreur , maintenir en bas des routes principaux
    app.use((req,res)=>{
        res.send({
            error : "Your request is not valid !"
        })
    });
}

module.exports = InitWebRoute;