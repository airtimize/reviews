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

for (let i = 0; i < 14e7; i += 1) {

    const review_id = i + 1;
    const listing_id = Math.floor(Math.random() * Math.floor(10000000));
    const created_at = faker.date.past();
    const textShort = faker.lorem.sentence();
    const username = faker.name.firstName();
    const avatar = faker.internet.avatar();
    const response_text = faker.lorem.sentence();
    const start = created_at.toISOString().slice(0, 10);
    const currentDate = new Date();
    const end = currentDate.toISOString().slice(0, 10);
    const response_created_at = faker.date.between(start, end);
    const response_username = faker.name.firstName();
    const response_avatar = faker.internet.avatar();

    // random number to determine if this review has text longer than 50 words
    const random_reviewLength = faker.random.number({ min: 0, max: 100 });

    // random number to determine if this review has a response
    const random_hasResponse = faker.random.number({ min: 0, max: 100 });

    // populate empty review object
    // if random number is divisible by 3, review object WILL have a response.
    // if not, the review object will NOT have a response
    // if (random_hasResponse % 7 === 0) {
    //   review.created_at = created_at;
    //   review.text = textShort;
    //   review.username = username;
    //   review.avatar = avatar;
    //   review.hasResponse = true;
    //   review.response_username = response_username;
    //   review.response_avatar = response_avatar;
    //   review.response_created_at = response_created_at;
    //   review.response_text = response_text;
    // } else {
    //   review.created_at = created_at;
    //   review.text = textShort;
    //   review.username = username;
    //   review.avatar = avatar;
    //   review.hasResponse = false;
    // }

    
  ableToWrite = fileStream.write(`${review_id},${listing_id},${created_at},${textShort},${username},${avatar},${response_text},${response_created_at},${response_username},${response_avatar}\n`);

  if (!ableToWrite) {
    await something();
    }

  }

  fileStream.end();

}

writer();


