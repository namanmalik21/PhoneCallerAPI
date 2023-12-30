const { faker } = require('@faker-js/faker');
const User = require("./models/user");

const generateData = async () => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    const user = {
      
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone_number: faker.phone.number(),
      password: faker.internet.password()
    };
    users.push(user);
  }
  return users;
};

const storeDataInDatabase = async () => {
  try {
    const usersData = await generateData();
    await User.bulkCreate(usersData);
    console.log('Fake data stored in the database successfully.');
  } catch (error) {
    console.error('Error storing fake data in the database:', error);
  }
};

storeDataInDatabase();
