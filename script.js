//When user opens page, they will add input to the search options

//they will add input to .searchInput

//they will select number of articles

//not required, if they have years, we also have to include year range in the search




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

