const { Specialty } = require("../../db");

const getAllSpecialities = async () => {
  try {
    const allSpecilities = await Specialty.findAll();
    if (!allSpecilities || allSpecilities.length === 0) {
      return "There are not specialities";
    }
    return allSpecilities;
  } catch (error) {
    throw new Error("Unable to get all specialities: " + error.message);
  }
};

module.exports = getAllSpecialities;
