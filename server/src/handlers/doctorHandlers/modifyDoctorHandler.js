const modifyDoctor = require("../../controllers/doctorControllers/modifyDoctor");

const modifyDoctorHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastname,
    registration,
    schedules,
    coverage,
    private,
    ubication,
    phoneNumber,
    description,
    experience,
    studies,
    photo,
    contact,
  } = req.body;
  try {
    const doctorUpdated = await modifyDoctor(
      id,
      name,
      lastname,
      registration,
      schedules,
      coverage,
      private,
      ubication,
      phoneNumber,
      description,
      experience,
      studies,
      photo,
      contact
    );
    res.status(201).json(doctorUpdated);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = modifyDoctorHandler;
