var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// update each cell's text with UFO Sighting values for all the columns
tableData.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
  });
});

// filter the data according to the User's input date
var date_input_button = d3.select("#filter-btn");
date_input_button.on("click", filterButton);

function filterButton() {
   d3.select("tbody").html("");

   // Prevent the page from refreshing
   d3.event.preventDefault();

   //grab date entered by user
   var userEnteredDate=d3.select("#datetime").property("value");

   //filter report
   var filteredData = tableData.filter(line => line.datetime === userEnteredDate);

   //show selected rows on page
   filteredData.forEach(function(ufoSightings) {
      console.log(ufoSightings);
      var row = tbody.append("tr");
      Object.entries(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });

};

