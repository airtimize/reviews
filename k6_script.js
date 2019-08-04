import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 150,
  duration: '5m',
  // stages: [
  //     { duration: "10s", target: 300 },
  //     { duration: "10s", target: 500 },
  //     { duration: "10s", target: 800 },
  //     { duration: "2m", target: 1000 },
  //     { duration: "10s", target: 500 },
  //     { duration: "10s", target: 300 },
  //     { duration: "10s", target: 0 }
  // ]
};

export default function() {
  let randomInt = Math.random() * (500 - 1) + 1;
  let otherRandomInt = Math.random() * (10e7 - 10e6) + 10e6;
  http.get(`http://localhost:3004/api/${randomInt}/reviews`);

  http.post(`http://localhost:3004/api/${randomInt}/reviews`);
  //sleep(1);
};
