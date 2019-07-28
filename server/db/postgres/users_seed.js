const faker = require('faker');
const fs = require('fs');

const fileStream = fs.createWriteStream('../csv/users.csv');


function something() {
  return new Promise((resolve) => {
    fileStream.once('drain', resolve);
  });
}

async function writer() {
  let ableToWrite = true;

  for (let i = 0; i < 100; i += 1) {
    const user_id = i + 1;
    const username = faker.name.firstName();
    const avatar = faker.internet.avatar();

    ableToWrite = fileStream.write(`${user_id},${username},${avatar}\n`);

    if (!ableToWrite) {
      await something();
    }
  }

  fileStream.end();
}

writer();
