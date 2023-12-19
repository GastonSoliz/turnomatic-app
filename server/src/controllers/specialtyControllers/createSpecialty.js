const { Specialty } = require("../../db");

const createSpecialty = async (name) => {
  try {
    const existSpecialty = await Specialty.findOne({ where: { name } });
    if (existSpecialty) throw new Error("This specialty already exists!");
    const newSpecialty = await Specialty.create({ name });
    return newSpecialty;
  } catch (error) {
    throw new Error("Unable to create this specialty: " + error.message);
  }
};

module.exports = createSpecialty;
