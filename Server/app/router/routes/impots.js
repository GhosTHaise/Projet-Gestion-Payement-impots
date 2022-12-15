const {impotController} = require("../../controller")

const impotRoutes = (Router) => {
    Router.get("/api/impots/:id",impotController.impotByUser);
    Router.post("/api/impots",impotController.addImpot)
}

module.exports = impotRoutes;