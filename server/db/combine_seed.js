const faker = require('faker');
const fs = require('fs');

const listingStream = fs.createWriteStream('./listings.csv');
const reviewStream = fs.createWriteStream('./reviews.csv');

console.time('csv files creation');

function something() {
  return new Promise((resolve) => {
    listingStream.once('drain', resolve);
  });
}

function something2() {
  return new Promise((resolve) => {
    reviewStream.once('drain', resolve);
  });
}

function randn_bm(min, max, skew) {
  var u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

  num = num / 10.0 + 0.5;
  if (num > 1 || num < 0) num = randn_bm(min, max, skew);
  num = Math.pow(num, skew);
  num *= max - min;
  num += min;
  return num;
}

async function writer() {
  let ableToWrite = true;
  //let review_id = 1;

  for (let i = 0; i < 2000; i += 1) {
    const listing_id = i + 1;
    const num_reviews = Math.floor(randn_bm(1, 30, 3));
    const accuracy = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
    const communication = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
    const cleanliness = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
    const location = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
    const check_in = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
    const value = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;

    for (let j = 0; j < num_reviews; j += 1) {
      //review_id += 1;
      const guest_user_id = faker.random.number({ min: 0, max: 1000 });
      const review_text = faker.lorem.sentence();
      const reviews_created_at = faker.date.past();
      const has_response = faker.random.number({ min: 0, max: 100 });
      const host_user_id = faker.random.number({ min: 0, max: 1000 });
      let response_text = null;

      const created_at = faker.date.past();
      const start = created_at.toISOString().slice(0, 10);
      const currentDate = new Date();
      const end = currentDate.toISOString().slice(0, 10);
      let response_created_at = null;

      if (has_response % 7 === 0){
        response_text = faker.lorem.sentence();
        response_created_at = faker.date.between(start, end);
      }

      ableToWrite = reviewStream.write(`${listing_id},${guest_user_id},${review_text},${reviews_created_at},${host_user_id},${response_text},${response_created_at}\n`);

      if (!ableToWrite) {
        await something2();
      }
    }

    ableToWrite = listingStream.write(`${listing_id},${accuracy},${communication},${cleanliness},${location},${check_in},${value},${num_reviews}\n`);

    if (!ableToWrite) {
      await something();
    }

  }

  listingStream.end();
  reviewStream.end();

}

writer();

console.timeEnd('csv files creation');