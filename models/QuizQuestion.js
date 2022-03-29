const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuizQuestion extends Model {}
// a user's individal game

QuizQuestion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: id
      }
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'quiz_question',
  }
);

module.exports = QuizQuestion;