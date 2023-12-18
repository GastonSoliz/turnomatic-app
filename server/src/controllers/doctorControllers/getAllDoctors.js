const { Doctor } = require("../../db");

const getAllDoctors = async () => {
  try {
    const allDoctors = await Doctor.findAll();
    if (!allDoctors) throw new Error("There are not doctors yet");
    return allDoctors;
  } catch (error) {
    throw new Error("Unable to get all the doctors: " + error.message);
  }
};

module.exports = getAllDoctors;
