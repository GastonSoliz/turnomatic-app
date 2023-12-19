const { Doctor } = require("../../db");

const deleteDoctor = async (id) => {
  try {
    const doctor = await Doctor.findByPk(id);
    if (!doctor) throw new Error("There's no doctor with this ID");
    await doctor.destroy();
  } catch (error) {
    throw new Error("Unable to delete this doctor: " + error.message);
  }
};

module.exports = deleteDoctor;
