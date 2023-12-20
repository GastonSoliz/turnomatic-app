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
    specialty,
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
      contact,
      specialty
    );
    res.status(200).json(doctorUpdated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = modifyDoctorHandler;
