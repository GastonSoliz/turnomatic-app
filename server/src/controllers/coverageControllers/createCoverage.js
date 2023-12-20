const { Coverage } = require("../../db");

const createCoverage = async (name) => {
  try {
    const coverageInstance = await Coverage.findOne({ where: { name } });
    if (coverageInstance) throw new Error("This coverage already exists!");
    const newCoverage = await Coverage.create({ name });
    return newCoverage;
  } catch (error) {
    throw new Error("Unable to create coverage: " + error.message);
  }
};

module.exports = createCoverage;
