const { authJwt } = require("../middleware");
const controller = require("../controllers/score.controller.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/scores/",
    [authJwt.verifyToken],
    controller.postScore
);

  app.get(
    "/api/scores/",
    [authJwt.verifyToken],
    controller.getScores
);

  app.delete(
    "/api/scores/",
    [authJwt.verifyToken],
    controller.deleteScores
);

};