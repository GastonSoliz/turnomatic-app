const { User } = require("../../db");

const getUser = async (id) => {
  try {
  } catch (error) {
    throw new Error("Unable to get all the users: " + error.message);
  }
};

module.exports = getUser;
