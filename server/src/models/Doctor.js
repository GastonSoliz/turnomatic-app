const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Doctor",
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
      registration: {
        type: DataTypes.INTEGER,
      },
      scores: {
        type: DataTypes.INTEGER,
      },
      schedules: {
        type: DataTypes.STRING,
      },
      coverage: {
        type: DataTypes.STRING,
      },
      private: {
        type: DataTypes.ENUM("Yes", "No", "Both"),
      },
      ubication: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
      studies: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      contact: {
        type: DataTypes.ENUM("PhoneNumber", "Mail", "Ubication"),
      },
    },
    { timestamps: false }
  );
};
