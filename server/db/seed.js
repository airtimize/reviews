/* eslint-disable max-len */
/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');
//const db = require('./index');
const fileStream = fs.createWriteStream('./listings.csv');


function something () {
  return new Promise(resolve => {
    fileStream.once('drain', resolve);
  });
}

// async function writer() {
//   let ableToWrite = true;
// helper function to make a new Listing instance
// const listingMaker = (listingid, ratings, numReviews, reviews) => (
//   new db.Listing({
//     listingid,
//     ratings,
//     numReviews,
//     reviews,
//   })
// );

// helper function to sort reviews array by created_at, most recent first, before saving to document
// alternative was to use mongoose/mongo operations: update, $push, $each
// const sortByCreated_At = arr => (
//   arr.sort((a, b) => b.created_at - a.created_at)
// );

//const reviewGen = function() {
async function writer() {
  let ableToWrite = true;

for (let i = 0; i < 1e7; i += 1) {
  // create listingid
  const listings = [];
  const listingid = i + 1;

  // use faker to make random values to assign to schema keys:
  // each listing will have same ratings, response_username, response_avatar
  // each listing will have variance in reviews array
  // use Math.round(num / 0.5) * 0.5 to give review value rounded to nearest .0 or .5
  const numReviews = faker.random.number({ min: 0, max: 30 });
  //console.log(`Listing index ${i} has ${numReviews} reviews`);
  const accuracy = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const communication = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const cleanliness = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const location = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const check_in = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  const value = Math.round(faker.finance.amount(1, 5, 1) / 0.5) * 0.5;
  //const overall = Math.round((accuracy + communication + cleanliness + location + check_in + value) / 6);
  const response_username = faker.name.firstName();
  const response_avatar = faker.internet.avatar();


  ableToWrite = fileStream.write(`${listingid},${numReviews},${accuracy},${communication},${cleanliness},${location},${check_in},${value},${response_username},${response_avatar}\n`);
  
  if (!ableToWrite) {
    await something();


  // listings.push({
  //   listingid:listingid,
  //   numReviews:numReviews,
  //   accuracy:accuracy,
  //   communication:communication,
  //   cleanliness:cleanliness,
  //   location:location,
  //   check_in:check_in,
  //   value:value,
  //   response_username:response_username,
  //   response_avatar:response_avatar
  // })
    }
  }
fileStream.end();
}
writer();

// for (let i = 0; i < 1000; i += 1) {
//   const reviews = [];
//   for (let j = 0; j < numReviews; j += 1) {
//     const review = {};

//     const created_at = faker.date.past();
//     const textShort = faker.lorem.sentence();
//     const username = faker.name.firstName();
//     const avatar = faker.internet.avatar();
//     const response_text = faker.lorem.sentence();
//     const start = created_at.toISOString().slice(0, 10);
//     const currentDate = new Date();
//     const end = currentDate.toISOString().slice(0, 10);
//     const response_created_at = faker.date.between(start, end);

//     // random number to determine if this review has text longer than 50 words
//     const random_reviewLength = faker.random.number({ min: 0, max: 100 });

//     // random number to determine if this review has a response
//     const random_hasResponse = faker.random.number({ min: 0, max: 100 });

//     // populate empty review object
//     // if random number is divisible by 3, review object WILL have a response.
//     // if not, the review object will NOT have a response
//     if (random_hasResponse % 7 === 0) {
//       review.created_at = created_at;
//       review.text = textShort;
//       review.username = username;
//       review.avatar = avatar;
//       review.hasResponse = true;
//       review.response_username = response_username;
//       review.response_avatar = response_avatar;
//       review.response_created_at = response_created_at;
//       review.response_text = response_text;
//     } else {
//       review.created_at = created_at;
//       review.text = textShort;
//       review.username = username;
//       review.avatar = avatar;
//       review.hasResponse = false;
//     }

//     // add the populated review object into the reviews array
//     reviews.push(review);
//     }
//   }

//uncomment

  // sort reviews array by created_at, most recent first
  //sortByCreated_At(reviews);
  // pass in ratings object and reviews array into new Listing instance
  //const newListing = listingMaker(listingid, ratings, numReviews, reviews);

// const fileStream = fs.createWriteStream('./file.csv');


// function something () {
//   return new Promise(resolve => {
//     fileStream.once('drain', resolve);
//   });
// }

// async function writer() {
//   let ableToWrite = true;

//   for(let i=0; i< 1e6; i++) {
//     ableToWrite = fileStream.write('Lorem ipsum dolor sit amet\n');
//     if (!ableToWrite) {
//       await something();
//     }
//   }
// }

// writer();