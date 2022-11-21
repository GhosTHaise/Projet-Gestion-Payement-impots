const store = require("../model/dbStore");
const corsOptions = {
    optionSuccessStatus : 200,
    exposedHeaders: ['sessionId'],
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials : true
}

const sessionOptions = {
    secret : process.env.SESSION_SECRET,
    resave:false,
    saveUnitilized:true,
    store,
    cookie : {
      sameSite : false,
      expires : Date.now() + 1 * 60 * 60 * 24,
      maxAge : 1000 * 60 * 60 * 24 * 7,
      secure : false,
      httpOnly : false
    }
}

module.exports = {
    corsOptions,
    sessionOptions
}

/* app.use((res,req,next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:5173/");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With , Content-Type, Accept");
    next();
  }) */