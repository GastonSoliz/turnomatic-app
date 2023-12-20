const { Doctor, Specialty } = require("../../db");

const getDoctor = async (id) => {
  try {
    const findDoctor = await Doctor.findByPk(id, {
      include: {
        model: Specialty,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (!findDoctor) throw new Error("The doctor with this ID doesn't exist");
    return findDoctor;
  } catch (error) {
    throw new Error("Unable to get this doctor: " + error.message);
  }
};

module.exports = getDoctor;
