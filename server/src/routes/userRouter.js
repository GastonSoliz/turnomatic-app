const { Router } = require("express");
const getAllUsersHandler = require("../handlers/userHandlers/getAllUsersHandler");
const getUserHandler = require("../handlers/userHandlers/getUserHandler");
const createUserHandler = require("../handlers/userHandlers/createUserHandler");
const modifyUserHandler = require("../handlers/userHandlers/modifyUserHandler");
const deleteUserHandler = require("../handlers/userHandlers/deleteUserHandler");

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.get("/:id", getUserHandler);
userRouter.put("/:id", modifyUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;
