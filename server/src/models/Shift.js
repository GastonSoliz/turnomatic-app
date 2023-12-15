const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Shift",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.INTEGER,
      },
      doctor_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      paidment_id: {
        type: DataTypes.UUID,
      },
      shift_type: {
        type: DataTypes.ENUM("query", "private", "analysis"),
        allowNull: false,
      },
      schedule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ubication: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
