const faker = require('faker');
const fs = require('fs');

const fileStream = fs.createWriteStream('./users.csv');


function something() {
  return new Promise((resolve) => {
    fileStream.once('drain', resolve);
  });
}

async function writer() {
  let ableToWrite = true;

  for (let i = 0; i < 1e6; i += 1) {
    const user_id = i + 1;
    const username = faker.name.firstName();
    const avatar = faker.internet.avatar();

    ableToWrite = fileStream.write(`${username},${avatar}\n`);

    if (!ableToWrite) {
      await something();
    }
  }

  fileStream.end();
}

writer();
