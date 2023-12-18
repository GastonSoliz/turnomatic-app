const { Doctor } = require("../../db");

const modifyDoctor = async (
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
) => {
  try {
    const doctorToUpdate = await Doctor.findByPk(id);
    if (!doctorToUpdate) throw new Error("There's no doctor with this ID");
    const updates = {
      ...(name !== undefined && { name }),
      ...(lastname !== undefined && { lastname }),
      ...(registration !== undefined && { registration }),
      ...(schedules !== undefined && { schedules }),
      ...(coverage !== undefined && { coverage }),
      ...(private !== undefined && { private }),
      ...(phoneNumber !== undefined && { phoneNumber }),
      ...(description !== undefined && { description }),
      ...(experience !== undefined && { experience }),
      ...(studies !== undefined && { studies }),
      ...(photo !== undefined && { photo }),
      ...(contact !== undefined && { contact }),
    };
    await doctorToUpdate.update(updates);
    return doctorToUpdate;
  } catch (error) {
    throw new Error("Unable to update this doctor" + error.message);
  }
};

module.exports = modifyDoctor;
