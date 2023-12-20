const { Router } = require("express");
const getAllCoveragesHandler = require("../handlers/coverageHandlers/getAllCoveragesHandler");
const createCoverageHandler = require("../handlers/coverageHandlers/createCoverageHandler");

const coverageRouter = Router();

coverageRouter.get("/", getAllCoveragesHandler);
coverageRouter.post("/", createCoverageHandler);

module.exports = coverageRouter;
