const { Doctor, Specialty } = require("../../db");
const createSpecialty = require("../specialtyControllers/createSpecialty");
const getDoctor = require("./getDoctor");

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
  contact,
  specialty
) => {
  try {
    const doctorToUpdate = await getDoctor(id);
    if (!doctorToUpdate) throw new Error("There's no doctor with this ID");
    // console.log(doctorToUpdate.Specialties[0].name);
    const updates = {
      ...(name !== undefined && name !== "" && { name }),
      ...(lastname !== undefined && lastname !== "" && { lastname }),
      ...(registration !== undefined &&
        registration !== "" && { registration }),
      ...(schedules !== undefined && schedules !== "" && { schedules }),
      ...(coverage !== undefined && coverage !== "" && { coverage }),
      ...(private !== undefined && private !== "" && { private }),
      ...(ubication !== undefined && ubication !== "" && { ubication }),
      ...(phoneNumber !== undefined && phoneNumber !== "" && { phoneNumber }),
      ...(description !== undefined && description !== "" && { description }),
      ...(experience !== undefined && experience !== "" && { experience }),
      ...(studies !== undefined && studies !== "" && { studies }),
      ...(photo !== undefined && photo !== "" && { photo }),
      ...(contact !== undefined && contact !== "" && { contact }),
    };
    if (specialty !== undefined || specialty.length > 0) {
      specialty.map(async (elem) => {
        let trueSpecialty = elem.trim();
        trueSpecialty =
          trueSpecialty.charAt(0).toUpperCase() + trueSpecialty.slice(1);
        if (!doctorToUpdate.Specialties.includes(trueSpecialty)) {
          const existSpecialty = await Specialty.findOne({
            where: { name: trueSpecialty },
          });
          if (existSpecialty) {
            await doctorToUpdate.addSpecialties(existSpecialty);
          } else {
            const newSpecialty = await createSpecialty(trueSpecialty);
            await doctorToUpdate.addSpecialties(newSpecialty);
          }
        }
      });
      doctorToUpdate.Specialties.map(async (elem) => {
        if (!specialty.includes(elem.name)) {
          const specialtyToRemove = await Specialty.findOne({
            where: { name: elem.name },
          });
          await doctorToUpdate.removeSpecialties(specialtyToRemove);
        }
      });
    }
    await doctorToUpdate.update(updates);
    return doctorToUpdate;
  } catch (error) {
    throw new Error("Unable to update this doctor" + error.message);
  }
};

module.exports = modifyDoctor;
