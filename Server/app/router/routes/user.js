const {userController} = require("../../controller");

const userRoutes = (Router) => {
    Router.get("/api/user/all",userController.allUserinfo);
    Router.get("/api/user/:id",userController.userInfo);
    Router.put("/api/user/:id",userController.userInfoUpdate);
    Router.delete("/api/user/:id",userController.userInfoDelete);
}

module.exports = userRoutes;