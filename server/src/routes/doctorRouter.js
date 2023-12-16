const { Router } = require("express");
const createDoctorHandler = require("../handlers/doctorHandler/createDoctorHandler");

const doctorRouter = Router();

// doctorRouter.get("/all", getAllDoctorsHandler);
doctorRouter.post("/", createDoctorHandler);
// doctorRouter.put("/:id", modifyDoctorHandler);
// doctorRouter.delete("/:id", deleteDoctorHandler);
// doctorRouter.get("/:id", getDoctorHandler);

module.exports = doctorRouter;
