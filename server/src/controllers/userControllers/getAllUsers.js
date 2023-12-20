const { User, Coverage } = require("../../db");

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({
      include: {
        model: Coverage,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    if (!allUsers || allUsers.length === 0)
      throw new Error("There are not users yet");
    return allUsers;
  } catch (error) {
    throw new Error("Unable to get all the users: " + error.message);
  }
};

module.exports = getAllUsers;
