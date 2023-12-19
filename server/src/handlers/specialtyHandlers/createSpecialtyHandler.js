const createSpecialty = require("../../controllers/specialtyControllers/createSpecialty");

const createSpecialtyHandler = async (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ error: "The 'name' field is required" });
  try {
    const newSpeciality = await createSpecialty(name);
    res.status(201).json(newSpeciality);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createSpecialtyHandler;
