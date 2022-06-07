const rateLimit = require('express-rate-limit');

/*
Limit the request for each IP to 100 requests
Block IP during 15 min
*/
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
	max: 100,    
});

module.exports = limiter;