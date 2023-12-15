const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      coverage: {
        type: DataTypes.STRING,
      },
      coverage_id: {
        type: DataTypes.INTEGER,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
