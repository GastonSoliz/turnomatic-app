const deleteDoctor = require("../../controllers/doctorControllers/deleteDoctor");

const deleteDoctorHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await deleteDoctor(id);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = deleteDoctorHandler;
