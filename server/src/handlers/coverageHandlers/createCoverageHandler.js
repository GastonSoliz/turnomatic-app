const createCoverage = require("../../controllers/coverageControllers/createCoverage");

const createCoverageHandler = async (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(500).json({ error: "The 'name' field is required" });
  try {
    const newCoverage = await createCoverage(name);
    res.status(201).json(newCoverage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCoverageHandler;
