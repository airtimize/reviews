const faker = require('faker');
const fs = require('fs');
const fileStream = fs.createWriteStream('./listings.csv');


function something () {
  return new Promise(resolve => {
    fileStream.once('drain', resolve);
  });
}
async function writer() {
  let ableToWrite = true;

for (let i = 0; i < 1e7; i += 1) {
  const listing_id = i + 1;
  const num_reviews = faker.random.number({ min: 0, max: 30 });
  const accuracy = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const communication = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const cleanliness = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const location = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const check_in = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const value = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;


  ableToWrite = fileStream.write(`${listing_id},${accuracy},${communication},${cleanliness},${location},${check_in},${value},${num_reviews}\n`);
  
  if (!ableToWrite) {
    await something();
    }
  }
fileStream.end();
}
writer();