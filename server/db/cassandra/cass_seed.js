const faker = require('faker');
const fs = require('fs');

const listingStream = fs.createWriteStream('../text/listings.json');

function something() {
  return new Promise((resolve) => {
    listingStream.once('drain', resolve);
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
  listingStream.write('[');
  let ableToWrite = true;
  let review_id = 1;

  for (let i = 0; i < 100; i += 1) {
    const listing_id = i + 1;
    const num_reviews = Math.floor(randn_bm(0, 30, 3));
    const hostusername = faker.name.firstName();
    const hostavatar = faker.internet.avatar();
    let overallaccuracy = 0;
    let overallcommunication = 0;
    let overallcleanliness = 0;
    let overalllocation = 0;
    let overallcheck_in = 0;
    let overallvalue = 0;
    let overall = 0;
    const reviews = [];

    for (let j = 0; j < num_reviews; j += 1) {
      review_id = j + 1;
      const guestusername = faker.name.firstName();
      const guestavatar = faker.internet.avatar();
      const review_text = faker.lorem.sentence();
      const review_created_at = faker.date.past().toDateString();
      const has_response = faker.random.number({ min: 0, max: 100 });
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

      reviews.push({review_id, guestusername, guestavatar, review_text,review_created_at,accuracy,communication,cleanliness,location,check_in,value,response_text,response_created_at})
    }

    overallaccuracy = num_reviews ? Math.round((overallaccuracy/num_reviews*2))/2 : 0;
    overallcommunication = num_reviews ? Math.round((overallcommunication/num_reviews)*2)/2 : 0;
    overallcleanliness = num_reviews ? Math.round((overallcleanliness/num_reviews)*2)/2 : 0;
    overalllocation = num_reviews ? Math.round((overalllocation/num_reviews)*2)/2 : 0;
    overallcheck_in = num_reviews ? Math.round((overallcheck_in/num_reviews)*2)/2 : 0;
    overallvalue = num_reviews ? Math.round((overallvalue/num_reviews)*2)/2 : 0;
    overall = num_reviews ? Math.round(((overallaccuracy+overallcommunication+overallcleanliness+overalllocation+overallcheck_in+overallvalue)/6)*2)/2 : 0;
    let review_string = JSON.stringify(reviews);

    ableToWrite = listingStream.write(`{"listing_id":"${listing_id}","hostusername":"${hostusername}", "hostavatar":"${hostavatar}","overallaccuracy":"${overallaccuracy}","overallcommunication":"${overallcommunication}","overallcleanliness":"${overallcleanliness}","overalllocation":"${overalllocation}","overallcheck_in":"${overallcheck_in}","overallvalue":"${overallvalue}","overall":"${overall}","num_reviews":"${num_reviews}","reviews":${review_string}},`);

    if (!ableToWrite) {
      await something();
    }

  }
  listingStream.write(']');
  listingStream.end();
}

writer();


