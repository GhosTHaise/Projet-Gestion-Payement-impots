const express = require("express");
const bodyParser = require("body-parser");
const InitializeViewEngine = require("./config/InitializeApp");
const InitWebRoute = require("./router/web");
const options = require("./config/OptionsApp");
const fs = require("fs");
const https = require("https");
const cron = require("node-cron");
const cors = require("cors");

/* cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
  }); */
require("dotenv").config();
const session = require("express-session");
const app = express(),
      PORT = process.env.PORT || 4001,
      HTTPS_PORT = process.HTTPS_PORT || 4430
;

const key = fs.readFileSync("./app/certs/CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("./app/certs/CA/localhost/localhost.crt");

const server = https.createServer({key : key ,cert : cert},app)
//middleware
app.use(cors(options.corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session(options.sessionOptions));

//view template
InitializeViewEngine(app);
//Router
InitWebRoute(app);
app.listen(PORT, function () {
    console.log("Server start on http://localhost:"+PORT);
  })
server.listen(HTTPS_PORT,()=>{
    console.log("Server start on https://localhost:"+HTTPS_PORT);
});