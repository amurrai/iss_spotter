const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("IP didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("37.19.213.153", (error, coords) => {
//   if (error) {
//     console.log("Coordinates didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coords);
// });

// fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, times) => {
//   if (error) {
//     console.log("Coordinates didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned times:' , times);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});