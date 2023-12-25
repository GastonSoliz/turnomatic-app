const { User, Coverage } = require("../../db");
const createCoverage = require("../coverageControllers/createCoverage");
const getUser = require("./getUser");

const modifyUser = async (id, name, lastname, photo, phoneNumber, coverage) => {
  try {
    const userInstance = await getUser(id);
    const updates = {
      ...(name !== undefined && name !== "" && { name }),
      ...(lastname !== undefined && lastname !== "" && { lastname }),
      ...(photo !== undefined && lastname !== "" && { photo }),
      ...(phoneNumber !== undefined && phoneNumber !== "" && { phoneNumber }),
    };

    if (coverage !== undefined || coverage.length > 0) {
      coverage.map(async (elem) => {
        let trueCoverage = elem.trim();
        trueCoverage =
          trueCoverage.charAt(0).toUpperCase() + trueCoverage.slice(1);
        if (!userInstance.Coverages.includes(trueCoverage)) {
          const coverageInstance = await Coverage.findOne({
            where: { name: trueCoverage },
          });
          if (coverageInstance) {
            await userInstance.addCoverages(coverageInstance);
          } else {
            const newCoverage = await createCoverage(trueCoverage);
            await userInstance.addCoverages(newCoverage);
          }
        }
      });
      userInstance.Coverages.map(async (elem) => {
        if (!coverage.includes(elem.name)) {
          const coverageToRemove = await Coverage.findOne({
            where: { name: elem.name },
          });
          await userInstance.removeCoverage(coverageToRemove);
        }
      });
    }
    await userInstance.update(updates);
    return userInstance;
  } catch (error) {
    throw new Error("Unable to modify the user data:" + error.message);
  }
};

module.exports = modifyUser;
