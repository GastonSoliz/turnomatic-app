const deleteUser = require("../../controllers/userControllers/deleteUser");

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const userMessage = await deleteUser(id);
    res.status(200).json(userMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteUserHandler;
