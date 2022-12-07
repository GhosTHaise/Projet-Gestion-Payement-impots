const {impotController} = require("../../controller")

const impotRoutes = (Router) => {
    Router.post("/api/impots/:id",impotController.impotByUser);
}

module.exports = impotRoutes;