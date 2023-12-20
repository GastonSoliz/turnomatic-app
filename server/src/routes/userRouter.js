const { Router } = require("express");
const getAllUsersHandler = require("../handlers/userHandlers/getAllUsersHandler");
const getUserHandler = require("../handlers/userHandlers/getUserHandler");

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getUserHandler);

module.exports = userRouter;
