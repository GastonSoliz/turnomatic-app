const { Router } = require("express");
const getAllUsersHandler = require("../handlers/userHandlers/getAllUsersHandler");
const getUserHandler = require("../handlers/userHandlers/getUserHandler");
const createUserHandler = require("../handlers/userHandlers/createUserHandler");

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.get("/:id", getUserHandler);

module.exports = userRouter;
