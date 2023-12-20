const getUser = require("../../controllers/userControllers/getUser");

const getUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const userInstance = await getUser(id);
    res.status(200).json(userInstance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserHandler;
