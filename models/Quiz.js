const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model { }
// the daily quiz

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    quiz_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: toString(DataTypes.NOW),
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: 'categories',
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: 'types',
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: 'difficulties',
      //   key: 'id',
      //   onDelete: 'SET NULL',
      // }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'quiz',
  }
);

module.exports = Quiz;
