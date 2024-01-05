const rateLimiter = require("express-rate-limit");
const limiter = rateLimiter({
	windowMs: 1000,
	max: 1
})

module.exports = limiter;