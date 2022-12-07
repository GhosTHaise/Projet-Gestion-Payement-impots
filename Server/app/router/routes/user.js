const {userController} = require("../../controller");

const userRoutes = (Router) => {
    Router.get("/api/user/:id",userController.userInfo);
    Router.post("/api/user/:id",userController.userInfoUpdate);
}

module.exports = userRoutes;