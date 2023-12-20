const { User, Coverage } = require("../../db");

const getUser = async (id) => {
  try {
    const userInstance = await User.findByPk(id, {
      include: {
        model: Coverage,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    if (!userInstance || userInstance.length === 0)
      throw new Error(`The user ${id} does not exists!`);
    return userInstance;
  } catch (error) {
    throw new Error("Unable to get all the users: " + error.message);
  }
};

module.exports = getUser;
