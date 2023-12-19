const { Router } = require("express");
const doctorRouter = require("./doctorRouter");
const userRouter = require("./userRouter");
const shiftRouter = require("./shiftRouter");
const specialtyRouter = require("./specialityRouter");

const router = Router();

router.use("/specialty", specialtyRouter);
router.use("/doctor", doctorRouter);
router.use("/user", userRouter);
router.use("/shift", shiftRouter);

module.exports = router;
