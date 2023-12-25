const modifyUser = require("../../controllers/userControllers/modifyUser");

const modifyUserHandler = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, photo, phoneNumber, coverage } = req.body;
  try {
    const userInstance = await modifyUser(
      id,
      name,
      lastname,
      photo,
      phoneNumber,
      coverage
    );
    res.status(200).json(userInstance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = modifyUserHandler;
