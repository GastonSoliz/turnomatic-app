const { Doctor } = require("../../db");

const createDoctor = async (mail, password) => {
  try {
    const existingDoctor = await Doctor.findOne({ where: { mail } });
    if (existingDoctor)
      throw new Error("A doctor with this mail already exists ");
    const newDoctor = await Doctor.create({ mail, password });
    return newDoctor;
  } catch (error) {
    throw new Error("Unable to create this doctor: " + error.message);
  }
};

module.exports = createDoctor;
