const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session")(session);

require("dotenv").config();
const store = new mongoDbStore({
    url : process.env.MONGODB_URI,
    databaseName : "ProjetE-Hetra",
    collection : "UserSessions",
    ttl : 2 * 60 *60,
    autoRemove : "native"
})

module.exports = store


