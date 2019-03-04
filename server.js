// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// NOTE: if they fail, pop up an alert that says they must fill out all fields properly.
// Also check first for unique entry.
// With that done, compare the difference between current user's scores against those from other users, question by question.
// Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions!
// Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// for (var i = 0; i < testFriends.length; i++) {
//     if ( === testFriends[i]) {
//     //   return res.json(characters[i]);
//     }
//   }


// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
