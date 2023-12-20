const getAllUsers = require("../../controllers/userControllers/getAllUsers");

const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsersHandler;
