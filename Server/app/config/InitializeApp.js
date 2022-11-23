const express = require("express");
const InitializeViewEngine = (app) => {
    //Fonts
    app.use("/fonts",express.static("./app/static/fonts"));
    
}

module.exports = InitializeViewEngine