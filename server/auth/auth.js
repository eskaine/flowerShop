const jwt = require('jsonwebtoken');

async function createToken(payload) {
    let token = await jwt.sign(payload, process.env.JWT_SECRET);
    return token;
}

module.exports = createToken;