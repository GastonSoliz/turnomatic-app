const getDoctor = require("../../controllers/doctorControllers/getDoctor");

const getDoctorHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await getDoctor(id);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getDoctorHandler;
