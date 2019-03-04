// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to 
    // handle the compatibility logic.

var friends = require("../data/friends");
var express = require("express");
var app = express();

    app.get("/friends", function(req, res) {
    return res.json(friends);
    });
    
    app.post("/friends", function(req, res) {
    var newFriend = req.body;
    
    newFriend.routeName = newFriend.friendName.replace(/\s+/g, "").toLowerCase();
    
    friends.push(newFriend);
    
    //   res.json(newFriend);
    
    // console.log(newFriend);
    
    // return "I am a string";
    
    let newFriendScores = friends[friends.length - 1].scores;
    // let results = [];
    let result = 41;
    let index = 0;
    for (let i = 0; i < friends.length - 1; i++) {
        let tally = 0;
        for (let j = 0; j < newFriendScores.length; j++) {
        let difference = Math.abs(newFriendScores[j] - friends[i].scores[j]);
        tally = tally + difference;
        }
        if (tally < result) {
        result = tally;
        index = [i];
        }
    }
    
    res.json(friends[index]);
    // for (let i = 0; )
    // console.log(newFriend.friendName);
    });
    
    module.exports = app;
    // Starts the server to begin listening