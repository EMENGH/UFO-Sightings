// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each weather report object
// tableData.forEach(function(weatherReport) {
//    console.log(weatherReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// tableData.forEach(function(ufoSightings) {
//    console.log(ufoSightings);
//    var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// tableData.forEach(function(ufoSightings) {
//    console.log(ufoSightings);
//    var row = tbody.append("tr");

//    Object.entries(ufoSightings).forEach(function([key, value]) {
//    console.log(key, value);
//    });
//  });

// // Step 4: Use d3 to append 1 cell per UFO Sightings report value (Date, City, State, Country, Shape, Duration, Comments)
// tableData.forEach(function(ufoSightings) {
//   console.log(ufoSightings);
//   var row = tbody.append("tr");

//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     console.log(key, value);
// //     // Append a cell to the row for each value
// //     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // UFO Sighting report values (Date, City, State, Country, Shape, Duration, Comments)
tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
// //     // Append a cell to the row for each value
// //     // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
// data.forEach((ufoSightings) => {
//   var row = tbody.append("tr");
//   Object.entries(ufoSightings).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
  