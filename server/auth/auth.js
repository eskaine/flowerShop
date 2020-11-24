const jwt = require('jsonwebtoken');

/**
 * @expiry set to expire in 24 hrs
 */

async function createToken(payload) {
    let token = await jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: 24 * 60 * 60 * 1000 });
    return token;
}

module.exports = {
    createToken,
};