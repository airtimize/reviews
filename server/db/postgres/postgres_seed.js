const faker = require('faker');
const fs = require('fs');

const listingStream = fs.createWriteStream('./listings.csv');
const reviewStream = fs.createWriteStream('./reviews.csv');

//console.time('csv files creation');

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
  let review_id = 1;

  for (let i = 0; i < 10e6; i += 1) {
    const listing_id = i + 1;
    const num_reviews = Math.floor(randn_bm(0, 30, 3));
    let overallaccuracy = 0;
    let overallcommunication = 0;
    let overallcleanliness = 0;
    let overalllocation = 0;
    let overallcheck_in = 0;
    let overallvalue = 0;
    let overall = 0;

    for (let j = 0; j < num_reviews; j += 1) {
      review_id = j+ 1;
      const guest_user_id = faker.random.number({ min: 0, max: 1000 });
      const review_text = faker.lorem.sentence();
      const reviews_created_at = faker.date.past().toDateString();
      const has_response = faker.random.number({ min: 0, max: 100 });
      const host_user_id = faker.random.number({ min: 0, max: 1000 });
      let response_text = '';

      const created_at = faker.date.past();
      const start = created_at.toISOString().slice(0, 10);
      const currentDate = new Date();
      const end = currentDate.toISOString().slice(0, 10);
      let response_created_at = '';

      accuracy = faker.random.number({ min: 1, max: 5 });
      communication = faker.random.number({ min: 1, max: 5 });
      cleanliness = faker.random.number({ min: 1, max: 5 });
      location = faker.random.number({ min: 1, max: 5 });
      check_in = faker.random.number({ min: 1, max: 5 });
      value = faker.random.number({ min: 1, max: 5 });

      overallaccuracy += accuracy;
      overallcommunication += communication;
      overallcleanliness += cleanliness;
      overalllocation += location;
      overallcheck_in += check_in;
      overallvalue += value;

      if (has_response % 7 === 0){
        response_text = faker.lorem.sentence();
        response_created_at = faker.date.between(start, end).toDateString();
      }

      ableToWrite = reviewStream.write(`${listing_id},${guest_user_id},${review_text},${reviews_created_at},${accuracy},${communication},${cleanliness},${location},${check_in},${value},${host_user_id},${response_text},${response_created_at}\n`);

      if (!ableToWrite) {
        await something2();
      }
    }

    overallaccuracy = Math.round((overallaccuracy/num_reviews*2))/2 || 0;
    overallcommunication = Math.round((overallcommunication/num_reviews)*2)/2 || 0;
    overallcleanliness = Math.round((overallcleanliness/num_reviews)*2)/2 || 0;
    overalllocation = Math.round((overalllocation/num_reviews)*2)/2 || 0;
    overallcheck_in = Math.round((overallcheck_in/num_reviews)*2)/2 || 0;
    overallvalue = Math.round((overallvalue/num_reviews)*2)/2 || 0;
    overall = Math.round(((overallaccuracy+overallcommunication+overallcleanliness+overalllocation+overallcheck_in+overallvalue)/6)*2)/2;

    ableToWrite = listingStream.write(`${listing_id},${overallaccuracy},${overallcommunication},${overallcleanliness},${overalllocation},${overallcheck_in},${overallvalue},${overall},${num_reviews}\n`);

    if (!ableToWrite) {
      await something();
    }

  }

  listingStream.end();
  reviewStream.end();
  //console.timeEnd('csv files creation');
  //console.log(review_id);
}

writer();


