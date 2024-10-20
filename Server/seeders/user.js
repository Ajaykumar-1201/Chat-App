import { faker } from "@faker-js/faker";
import { User } from "../models/user.js";

const createUser = async (numUsers) => {
  try {
    const userPromise = [];

    for (let i = 0; i < numUsers; i++) {
      const tempUser = User.create({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          public_id: faker.system.fileName(),
          url: faker.image.avatar(),
        },
      });
      userPromise.push(tempUser);
    }
    await Promise.all(userPromise);
    console.log(`${numUsers} users created successfully.`);
    process.exit(1);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const createSampleChats = (chatCounts) => {};

export { createUser, createSampleChats };
