const faker = require('faker');
const fs = require('fs');
const fileStream = fs.createWriteStream('./reviews.csv');


function something () {
  return new Promise(resolve => {
    fileStream.once('drain', resolve);
  });
}


async function writer() {
  let ableToWrite = true;

for (let i = 0; i < 50e6; i += 1) {

    const review_id = i + 1;
    const listing_id = faker.random.number({ min: 0, max: 1000000 });
    const guest_user_id = faker.random.number({ min: 0, max: 1000 });
    const review_text = faker.lorem.sentence();
    const reviews_created_at = faker.date.past();
    const has_response = faker.random.number({ min: 0, max: 100 });
    const host_user_id = faker.random.number({ min: 0, max: 1000 });
    const response_text = faker.lorem.sentence();

    const created_at = faker.date.past();
    const start = created_at.toISOString().slice(0, 10);
    const currentDate = new Date();
    const end = currentDate.toISOString().slice(0, 10);
    const response_created_at = faker.date.between(start, end);
    
  ableToWrite = fileStream.write(`${review_id},${listing_id},${guest_user_id},${review_text},${reviews_created_at},${has_response},${host_user_id},${response_text},${response_created_at}\n`);

  if (!ableToWrite) {
    await something();
    }

  }

  fileStream.end();

}

writer();


