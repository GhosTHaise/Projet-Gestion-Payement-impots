const store = require("../model/dbStore");
const corsOptions = {
    optionSuccessStatus : 200,
    credentials : true
}

const sessionOptions = {
    secret : process.env.SESSION_SECRET,
    resave:false,
    saveUnitilized:true,
    store,
    cookie : {
      expires : Date.now() + 1000 * 60 * 60 * 24,
      maxAge : 1000 * 60 * 60 * 24 * 7,
      secure : false
    }
}

module.exports = {
    corsOptions,
    sessionOptions
}