const { User } = require("../../db");

const deleteUser = async (id) => {
  try {
    const userInstance = await User.findByPk(id);
    if (!userInstance) throw new Error("There's no user with the id: " + id);
    await userInstance.destroy();
    return `The user ${id} has been deleted`;
  } catch (error) {
    throw new Error("Unable to delete user: " + error.message);
  }
};

module.exports = deleteUser;
