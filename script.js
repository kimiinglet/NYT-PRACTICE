//When user opens page, they will add input to the search options

//they will add input to .searchInput

//they will select number of articles

//we have variables that must be used during the search click event.
var apiKey = "yta9zAof52rfg75gILmNs8qy7HgHLa8s";

//these variables change according to user input.
var searchTerm = "";
var recordNumberEl = 0;
//not required, if they have years, we also have to include year range in the search
var startYearInputEl = 0;
var endYearInputEl = 0;


//on click submit-- the page queries the NYT API
$("#searchBtn").on("click", function () {

});

//on click clear results, the page clears their input
$("#clearBtn").on("click", function () {
    localStorage.clear();
    $("#userSearch").text("");
    $("#startYearInput").text("");
    $("#endYearInput").text("");
});

