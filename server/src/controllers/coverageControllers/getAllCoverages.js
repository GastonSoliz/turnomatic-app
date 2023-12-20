const { Coverage } = require("../../db");

const getAllCoverages = async () => {
  try {
    const allCoverages = await Coverage.findAll();
    if (!allCoverages || allCoverages.length === 0) {
      throw new Error("There are not coverages");
    }
    return allCoverages;
  } catch (error) {
    throw new Error("Unable to get all the coverages: " + error.message);
  }
};

module.exports = getAllCoverages;
