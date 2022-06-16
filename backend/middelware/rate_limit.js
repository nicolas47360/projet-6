const rateLimit = require('express-rate-limit');

/*
Limit the request for each IP to 1000 requests
Block IP during 15 min
*/
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
});

module.exports = limiter;