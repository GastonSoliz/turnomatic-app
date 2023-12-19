const getAllDoctors = require("../../controllers/doctorControllers/getAllDoctors");

const getAllDoctorsHandler = async (req, res) => {
  try {
    const allDoctors = await getAllDoctors();
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getAllDoctorsHandler;
