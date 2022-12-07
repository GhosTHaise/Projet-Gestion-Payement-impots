const {loginController} = require("../../controller");
const loginRoutes = (Router) => {
    //Login&Registered
    Router.post("/api/registered",loginController.userRegistered);
    Router.post("/api/loginValidation",loginController.userLoginValidation);
    Router.get("/api/loginSession",loginController.sessionUserInformations);
}

module.exports = loginRoutes;