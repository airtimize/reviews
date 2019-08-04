const relic = require('newrelic');
const express = require('express');
const app = express();
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3004;
const cors = require('cors');
const redis = require('redis');
const { Pool } = require('pg');

//app.use(morgan('dev'));
const PORT = process.env.PORT;
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);

app.use(bodyParser.json());
app.use('/rooms/:listingid', express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

const pool = new Pool({
  host: 'localhost',
  database: 'airtimize_reviews',
});

app.get('/api/:listingid/reviews', cors(), (req, res) => {
  let q = `SELECT r.* from listings l left join reviews r on l.id = r.listing_id where listing_id=${req.params.listingid};`
  client.get(q, (err, data) => {
    if (err) throw err;
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      pool.query(q, (err, results) => {
        if (err) {
          throw err;
        } else {
          client.setex(q, 600, JSON.stringify(results.rows));
          res.send(results.rows);
        }
      })
    }
  })
});

 app.post('/api/:listingid/reviews', cors(), (req, res) => {
  const listing_id = req.params.listingid;
  const { guest_user_id,review_text,accuracy,communication,cleanliness,location,checkin,value,host_user_id} = req.body;
  const review_created_at = '2019-01-21';
  pool.query(
   `INSERT INTO reviews (listing_id,guest_user_id,review_text,review_created_at,accuracy,communication,cleanliness,location,checkin,value,host_user_id)
  VALUES
  (${listing_id},${guest_user_id},'${review_text}','${review_created_at}',${accuracy},${communication},${cleanliness},${location},${checkin},${value},${host_user_id});`
  , (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
      res.sendStatus(400);
    } else {
       res.sendStatus(200);
    }
  });
});


app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
