const getAllCoverages = require("../../controllers/coverageControllers/getAllCoverages");

const getAllCoveragesHandler = async (req, res) => {
  try {
    const allCoverages = await getAllCoverages();
    res.status(200).json(allCoverages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCoveragesHandler;
