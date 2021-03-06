const sequelize = require('../config/connection');
const { User, Role, Types, Difficulties } = require('../models');
const userData = require('./userData.json');
const seedCategories = require('./categoryData');
// const buildQuizes = require('./buildQuizes');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await Role.create({ id: 1, role: 'player' });
  await Role.create({ id: 2, role: 'administrator' });
  console.log('\n----- ROLES SYNCED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USER SYNCED -----\n');

  await Difficulties.create({ difficulty_name: 'easy', display_name: 'Easy' });
  await Difficulties.create({ difficulty_name: 'medium', display_name: 'Medium' });
  await Difficulties.create({ difficulty_name: 'hard', display_name: 'Hard' });
  console.log('\n----- DIFFICULTIES SYNCED -----\n');

  await Types.create({ type_name: 'multiple', display_name: 'Multiple Choice' });
  await Types.create({ type_name: 'boolean', display_name: 'True / False' });
  console.log('\n----- TYPES SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // await buildQuizes();
  // console.log('\n----- QUIZES SEEDED -----\n');

  // await seedQuiz();
  // console.log('\n----- QUIZ SEEDED -----\n');

  // await seedQuizQuestions();
  // console.log('\n----- QUIZ QUESTIONS SEEDED -----\n');

  // await seedQuizAnswers();
  // console.log('\n----- QUIZ ANSWERS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
