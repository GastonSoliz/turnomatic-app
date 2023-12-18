const createDoctor = require("../../controllers/doctorControllers/createDoctor");

const createDoctorHandler = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const newDoctor = await createDoctor(mail, password);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createDoctorHandler;
