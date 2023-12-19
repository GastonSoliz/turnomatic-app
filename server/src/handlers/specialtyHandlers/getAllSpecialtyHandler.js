const getAllSpecialities = require("../../controllers/specialtyControllers/getAllSpecialities");

const getAllSpecialitiesHandler = async (req, res) => {
  try {
    const allSpecilities = await getAllSpecialities();
    res.status(200).json(allSpecilities);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getAllSpecialitiesHandler;
