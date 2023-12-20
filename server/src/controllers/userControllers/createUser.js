const { User } = require("../../db");

const createUser = async (mail, password) => {
  try {
    const userInstance = await User.findOne({ where: { mail } });
    if (userInstance) throw new Error("A user with this mail already exists!");
    const newUser = await User.create({ mail, password });
    return newUser;
  } catch (error) {
    throw new Error("Unable to create this user: " + error.message);
  }
};

module.exports = createUser;
