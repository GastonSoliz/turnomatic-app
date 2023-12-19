const { Router } = require("express");
const getAllSpecialitiesHandler = require("../handlers/specialtyHandlers/getAllSpecialtyHandler");
const createSpecialtyHandler = require("../handlers/specialtyHandlers/createSpecialtyHandler");

const specialtyRouter = Router();

specialtyRouter.get("/", getAllSpecialitiesHandler);
specialtyRouter.post("/", createSpecialtyHandler);

module.exports = specialtyRouter;
