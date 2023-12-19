const { Router } = require("express");
const createDoctorHandler = require("../handlers/doctorHandlers/createDoctorHandler");
const getAllDoctorsHandler = require("../handlers/doctorHandlers/getAllDoctorsHandler");
const getDoctorHandler = require("../handlers/doctorHandlers/getDoctorHandler");
const modifyDoctorHandler = require("../handlers/doctorHandlers/modifyDoctorHandler");
const deleteDoctorHandler = require("../handlers/doctorHandlers/deleteDoctorHandler");

const doctorRouter = Router();

doctorRouter.get("/", getAllDoctorsHandler);
doctorRouter.post("/", createDoctorHandler);
doctorRouter.put("/:id", modifyDoctorHandler);
doctorRouter.delete("/:id", deleteDoctorHandler);
doctorRouter.get("/:id", getDoctorHandler);

module.exports = doctorRouter;
