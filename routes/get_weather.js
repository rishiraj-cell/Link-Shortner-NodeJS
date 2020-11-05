/*
 *  File to fetch the weather details
 */

// Dependencies
const express = require('express');
const router = express.Router();
const request = require('request');

/* POST /get-weather 
 * Purpose: Gets the weather info 
 */
router.post('/', (req, res) => {

    // Build the url to request for weather info
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.APPID}&units=metric`;

    // Request the url 
    request(url, (err, response, body) => {
        if (err) {
            return res.json({
                success: false,
                err: 'Cannot get the weather details! Please try again later.'
            })
        } 
    });


});

// Export the router
module.exports = router;