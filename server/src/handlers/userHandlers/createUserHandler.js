const createUser = require("../../controllers/userControllers/createUser");

const createUserHandler = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const newUser = await createUser(mail, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createUserHandler;
