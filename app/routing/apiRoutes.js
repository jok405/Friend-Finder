//console.log('API Route Connected!');   // executing connection check

const friendsArray = require('../data/friends.js');

// Get & Post route methods
function apiRoutes(app) {

    // GET route with the url /api/friends. Manages and shows a JSON list of possible celebrity friends.
    app.get('/api/friends', (req, res) => {
        res.json(friendsArray);
    });

    // POST routes /api/friends. Manages incoming survey results & handles the compatibility logic as well.
    app.post('/api/friends', (req, res) => {

        const celebFriend = {         // Parse  celeb friend entry to get integers for AJAX post converts numbers into strings
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        const scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        celebFriend.scores = scoresArray;


        const matchPointsArray = [];
        for (var i = 0; i < friendsArray.length; i++) {

            let existingMatch = 0;            // Check each friend's scores and sum difference in points
            for (let j = 0; j < celebFriend.scores.length; j++) {
                existingMatch += Math.abs(celebFriend.scores[j] - friendsArray[i].scores[j]);
            }

            matchPointsArray.push(existingMatch);             // Push each comparison between friends to array
        }

        let idealMatch = 0;
        for (var i = 1; i < matchPointsArray.length; i++) {

            if (matchPointsArray[i] <= matchPointsArray[idealMatch]) {
                idealMatch = i;
            }
        }

        const theIdealMatch = friendsArray[idealMatch];

        res.json(theIdealMatch);               // Reply with a JSON object of the best match

        friendsArray.push(celebFriend);          // Push the new friend to the friends data array for storage

    });

}

module.exports = apiRoutes;    // Exports to server.js